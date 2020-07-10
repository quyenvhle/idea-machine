import React from 'react';
import Card from './Card';

const CardList = ( { data }) => {
    return (
        <div className="mx-auto bg-gray-200 flex justify-center lg:py-12 py-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                { data && data.reverse().map(idea => {
                    return (
                        <Card idea={idea} key={idea.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardList;