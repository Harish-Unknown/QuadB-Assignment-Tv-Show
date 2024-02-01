import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from "./BookingForm";

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = `https://api.tvmaze.com/shows/${id}`;
        axios.get(apiUrl)
            .then(response => {
                setShow(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const removeTags = (html) => {
        const regex = /<[^>]*>/g;
        return html.replace(regex, '');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!show) {
        return <div>Show not found!</div>;
    }

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black w-full h-full text-white p-5 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold mb-5 mt-[52px] uppercase">{show.name}</h2>
            <img src={show.image?.medium} alt={show.name} className="mb-3" />
            <p className="text-gray-400 w-[90vw] md:w-[80vw] px-5 text-[18px] m-5">{removeTags(show.summary)}</p>

            <BookingForm />
            
        </div>
    );
}

export default ShowDetails;
