import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://dry-badlands-79038.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successfully!!')
                    reset();
                }
            })
    };


    return (
        <div className="mt-5">
            <h2 className="mb-4">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input className="form-control w-50 mx-auto" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control w-50 mx-auto" {...register("description")} placeholder="Description" />
                </div>
                <div className="mb-3">
                    <input className="form-control w-50 mx-auto" {...register("image")} placeholder="Image Url" />
                </div>
                <div className="mb-3">
                    <input className="form-control w-50 mx-auto" type="number" {...register("price")} placeholder="Price" />
                </div>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddUser;