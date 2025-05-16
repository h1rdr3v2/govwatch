import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import { categories } from '@/data/mockData';

const CategorySection: React.FC = () => {
	return (
		<section id="categories" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-4">
					Issue Categories
				</h2>
				<p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
					Select from common reportable issues or choose "Others" for anything not listed
				</p>
				
				<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
					{categories.map((category, index) => (
						<CategoryCard key={category.name} category={category} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CategorySection;