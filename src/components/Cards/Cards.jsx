import React from 'react';
import { LiaUserFriendsSolid } from "react-icons/lia";

const Cards = () => {
    const cards = [
        {
            name: "Experience Mentor",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            backgroundColor: "blue",
        },
        {
            name: "Experience Mentor",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            backgroundColor: "red",
        },
        {
            name: "Experience Mentor",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            backgroundColor: "#ffc000",
        },
        {
            name: "Experience Mentor",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            backgroundColor: "green",
        },
    ];
    const lgBorderColors = ["#1902fd", "#ff0000", "#00ff00", "#ffff00"];
    return (
        <>
            {cards.map((card, index) => {
                return (
                    <div key={index} className='w-full m-5 lg:w-[270px] sm:w-[90vw] sm:mx-4'>
                        <a href="#" className={`block max-w-sm p-6 border-t-4 bg-white lg:border-${lgBorderColors[index]} rounded-b-lg shadow `}>
                            <LiaUserFriendsSolid style={{ fontSize: 40, backgroundColor: card.backgroundColor, color: "white", padding: 5, borderRadius: 5 }} />
                            <h5 className="my-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{card.desc}.</p>
                        </a>
                    </div>
                );
            })}
        </>
    );
};

export default Cards;
