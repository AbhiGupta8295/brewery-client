import React, { useState } from 'react';
import axios from 'axios';

function BreweryInfo({ info , id}) {
    const [rating, setRating] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/reviews', {
                id,
                username,
                rating,
                description
            });
            setRating('');
            setDescription('');
            setUsername('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div>
                <h1>{info.name}</h1>
                <p><strong>Brewery Type:</strong> {info.brewery_type}</p>
                <p><strong>Address 1:</strong> {info.address_1}</p>
                {info.address_2 && <p><strong>Address 2:</strong> {info.address_2}</p>}
                {info.address_3 && <p><strong>Address 3:</strong> {info.address_3}</p>}
                <p><strong>City:</strong> {info.city}</p>
                <p><strong>State/Province:</strong> {info.state_province}</p>
                <p><strong>Postal Code:</strong> {info.postal_code}</p>
                <p><strong>Country:</strong> {info.country}</p>
                {info.longitude && <p><strong>Longitude:</strong> {info.longitude}</p>}
                {info.latitude && <p><strong>Latitude:</strong> {info.latitude}</p>}
                <p><strong>Phone:</strong> {info.phone}</p>
                <p><strong>Website URL:</strong> <a href={info.website_url} target="_blank" rel="noopener noreferrer">{info.website_url}</a></p>
                <p><strong>State:</strong> {info.state}</p>
                <p><strong>Street:</strong> {info.street}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Rating (1 to 5):
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit Review</button>
            </form>
        </>
    );
}

export default BreweryInfo;
