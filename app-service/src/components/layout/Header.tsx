"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const name = process.env.APP_NAME ?? "CitizenPulse";
	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<i className="fas fa-comments-alt text-blue-600 text-3xl mr-2"></i>
					<h1 className="text-2xl font-bold text-gray-800">{name}</h1>
				</div>
				<nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 md:items-center`}>
					<a href="#report" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer block py-2 md:py-0">
						Report Issue
					</a>
					<a href="#track" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer block py-2 md:py-0">
						Track Report
					</a>
					<a href="#categories" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer block py-2 md:py-0">
						Categories
					</a>
					<a href="#about" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer block py-2 md:py-0">
						About
					</a>
				</nav>
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-gray-500 hover:text-gray-700 cursor-pointer rounded whitespace-nowrap"
					>
						<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;