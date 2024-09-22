import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "../../pages/SearchResults/SearchResults.scss";

function Recommendations() {
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler();

    useEffect(() => {
        const fetchRecommendations = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("No authentication token found");
                return;
            }
            try {
                const recData = await api.getBookRec(token);
                if (Array.isArray(recData.recommendations)) {
                    setRecommendations(recData.recommendations);
                } else {
                    setError("No recommendations found");
                }
            } catch (error) {
                setError("Error fetching recommendations");
                console.error(error);
            }
        };
        fetchRecommendations();
    }, []);

    return (
        <div className="recommendations">
            {error ? (
                <p>{error}</p>
            ) : (
                recommendations.map((book) => (
                    <ul key={book.id} className="recommendations__wrapper">
                        <li className="recommendations__item">
                            <img
                                className="recommendations__cover"
                                src={book.coverImage}
                                alt={book.title}
                            />
                        </li>
                        <li className="recommendations__item">
                            <h3 className="recommendations__title">{book.title}</h3>
                        </li>
                        <li className="recommendations__item">
                            <p className="recommendations__author">{book.author}</p>
                        </li>
                    </ul>
                ))
            )}
        </div>
    );
}

export default Recommendations;
