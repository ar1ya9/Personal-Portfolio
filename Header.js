import React from 'react';

function Header() {
    return (
        <nav className="bg-blue-500 p-4 fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">My Portfolio-Almahmud</h1>
                <ul className="flex space-x-4 text-white">
                    <li><a href="#profile" className="hover:underline">Profile</a></li>
                    <li><a href="#about" className="hover:underline">About Me</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
