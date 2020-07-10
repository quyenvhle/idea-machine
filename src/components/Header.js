import React from 'react';
import '../styles/main.css';

import illustration from '../assets/illustration.svg';

const Header = () => {
    return (
        <div className="flex flex-col md:pt-16 md:pb-12 py-8">
            <img className="object-contain sm: h-32 md:h-48 w-full" alt="Header illustration" src={illustration} />
            <div className="headerContent text-center pt-4">
                <p className="headerTitle font-bold md:text-3xl text-2xl">The Idea Machine</p>
                <p className="headerText font-normal md:text-xl text-base pt-1">An idea a day keeps your lazy self away</p>
            </div>
        </div>
    )
}

export default Header;