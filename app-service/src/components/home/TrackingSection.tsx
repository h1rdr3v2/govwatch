import React from 'react';
import TrackingStage from '../ui/TrackingStage';
import StatsCard from '../ui/StatsCard';
import { trackingStages, stats } from '../../data/mockData';

const TrackingSection: React.FC = () => {
	return (
		<section id="track" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-4">
					Track Your Report
				</h2>
				<p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
					Follow your report's journey from submission to resolution with our transparent tracking system
				</p>
				
				<div className="bg-gray-50 rounded-xl p-8 shadow-md">
					<div className="max-w-4xl mx-auto">
						<div className="relative">
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
							
							{trackingStages.map((stage, index) => (
								<TrackingStage key={index} stage={stage} />
							))}
						</div>
						
						<div className="mt-12 text-center">
							<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow transition duration-300 cursor-pointer">
								Track Another Report
							</button>
						</div>
					</div>
				</div>
				
				<div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
					{stats.map((stat, index) => (
						<StatsCard
							key={index}
							value={stat.value}
							label={stat.label}
							description={stat.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrackingSection;