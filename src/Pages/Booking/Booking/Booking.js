import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://dry-badlands-79038.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;