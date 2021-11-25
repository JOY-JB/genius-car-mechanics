import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://dry-badlands-79038.herokuapp.com/services/`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleServiceDelete = id => {
        const url = `https://dry-badlands-79038.herokuapp.com/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("deleted Successfully")
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <span>{service.name} </span>
                    <button onClick={() => handleServiceDelete(service._id)}>delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageServices;