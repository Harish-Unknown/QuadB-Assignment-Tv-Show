import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ShowList() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = "https://api.tvmaze.com/shows";

        axios.get(apiUrl)
            .then(response => {
                setShows(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black w-full h-full text-white">
            <h2 className="text-5xl font-bold text-center p-4 py-[50px]">TV SHOWS</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-2">

                {shows.map((show, index) => {
                    const name = show.name;
                    const image = show.image?.medium;
                    if (!image) return null;
                    return (
                        <div className="flex flex-col justify-center items-center m-5 border-solid border-2 rounded-md border-white">
                            <h3 className="text-3xl text-center m-3">{name}</h3>
                            {image && <img src={image} alt='' className="hover:scale-105 duration-500 mt-2" />}
                            <Link to={`/details/${show.id}`} key={show.id}>
                                <button className="m-5 px-3 py-2 border-solid border-2 border-white hover:bg-white hover:text-black text-gray-300 ">{name}</button>
                            </Link>
                        </div>
                    );
                })}
            </div >
        </div>
    );
}