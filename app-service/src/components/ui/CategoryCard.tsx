import React from 'react';
import { Category } from '../../types';
import Image from "next/image";

interface CategoryCardProps {
	category: Category;
	index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
	return (
		<div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
			<div className="h-40 overflow-hidden">
				<Image
					src='/work.jpg'
					alt={category.name}
					width={200}
					height={200}
					className="w-full h-full object-cover object-top"
				/>
			</div>
			<div className="p-5">
				<div className="flex items-center mb-3">
					<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
						<i className={`fas ${category.icon} text-blue-600`}></i>
					</div>
					<h3 className="text-xl font-bold">{category.name}</h3>
				</div>
				<p className="text-gray-600 text-sm mb-4">
					{category.description}
				</p>
				<a
					href="#report"
					className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer"
				>
					Report Now
					<i className="fas fa-arrow-right ml-2"></i>
				</a>
			</div>
		</div>
	);
};

export default CategoryCard;