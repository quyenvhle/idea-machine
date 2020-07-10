import React from 'react';
import '../styles/main.css';

const Card = ( { idea } ) => {
    return (
        <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out">
            <div className="px-6 py-6 space-y-2">
                <h2 className="text-xl font-bold">{idea.title}</h2>
                <p className="text-base">{idea.description}</p>
                <p className="text-sm text-gray-600">{idea.date}</p>
            </div>
        </div>
    )
}

export default Card;