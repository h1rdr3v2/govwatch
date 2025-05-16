import React from 'react';
import { Testimonial as TestimonialType } from '../../types';

interface TestimonialProps {
	testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<div className="flex items-center mb-4">
				<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
					<i className="fas fa-user text-blue-600"></i>
				</div>
				<div>
					<h4 className="font-bold">{testimonial.name}</h4>
					<p className="text-gray-600 text-sm">{testimonial.role}</p>
				</div>
			</div>
			<p className="text-gray-700 mb-4">"{testimonial.text}"</p>
			<div className="text-yellow-400">
				{[...Array(5)].map((_, i) => (
					<i key={i} className="fas fa-star"></i>
				))}
			</div>
		</div>
	);
};

export default Testimonial;