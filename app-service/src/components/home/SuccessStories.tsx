import React from 'react';
import Testimonial from '../ui/Testimonial';
import BeforeAfterComparison from '../ui/BeforeAfterComparison';
import { testimonials } from '../../data/mockData';

const SuccessStories: React.FC = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-4">
					Success Stories
				</h2>
				<p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
					See how citizens like you are making a difference in their communities
				</p>
				
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Testimonial key={index} testimonial={testimonial} />
					))}
				</div>
				
				<div className="mt-16">
					<h3 className="text-2xl font-bold text-center mb-8">
						Before & After
					</h3>
					<BeforeAfterComparison
						beforeImage="https://readdy.ai/api/search-image?query=A%20damaged%20pothole%20on%20a%20city%20street%2C%20showing%20cracked%20asphalt%20and%20water%20collection%2C%20photographed%20in%20daylight%20with%20realistic%20details%2C%20representing%20an%20urban%20infrastructure%20problem%20before%20repair&width=500&height=300&seq=before1&orientation=landscape"
						afterImage="https://readdy.ai/api/search-image?query=A%20freshly%20repaired%20road%20section%20with%20new%20smooth%20asphalt%2C%20clearly%20showing%20where%20a%20pothole%20was%20fixed%2C%20photographed%20in%20similar%20lighting%20conditions%20as%20the%20before%20image%2C%20representing%20successful%20infrastructure%20repair&width=500&height=300&seq=after1&orientation=landscape"
						beforeTitle="Pothole on Main Street"
						afterTitle="Repaired in 7 Days"
						beforeDate="Reported on May 1, 2025"
						afterDate="Resolved on May 8, 2025"
					/>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;