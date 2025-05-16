import React from 'react';
import { Category } from '../../types';

interface CategoryCardProps {
	category: Category;
	index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
	return (
		<div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
			<div className="h-40 overflow-hidden">
				<img
					src={`https://readdy.ai/api/search-image?query=A%20professional%2C%20clean%20illustration%20representing%20${category.name}%20issues%20in%20urban%20settings%2C%20with%20a%20minimalist%20design%20and%20blue%20color%20scheme%20on%20white%20background%2C%20suitable%20for%20government%20reporting%20platform&width=300&height=200&seq=cat${index}&orientation=landscape`}
					alt={category.name}
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