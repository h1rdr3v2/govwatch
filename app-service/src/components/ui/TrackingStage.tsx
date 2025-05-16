import React from 'react';
import { TrackingStage as TrackingStageType } from '../../types';

interface TrackingStageProps {
	stage: TrackingStageType;
}

const TrackingStage: React.FC<TrackingStageProps> = ({ stage }) => {
	const statusColors = {
		complete: "bg-green-500 text-green-500",
		current: "bg-blue-500 text-blue-500",
		pending: "bg-gray-300 text-gray-400"
	};
	
	const statusText = {
		complete: "Complete",
		current: "Current Status",
		pending: "Pending"
	};
	
	const statusIcon = {
		complete: "fas fa-check-circle",
		current: "fas fa-clock",
		pending: "fas fa-hourglass-half"
	};
	
	return (
		<div className="relative mb-12">
			<div className="flex items-center mb-4">
				<div className={`z-10 w-16 h-16 ${statusColors[stage.status].split(' ')[0]} rounded-full flex items-center justify-center mr-4 border-4 border-white`}>
					<i className={`fas ${stage.icon} text-white text-xl`}></i>
				</div>
				<div>
					<h3 className={`text-xl font-bold ${stage.status === 'pending' ? 'text-gray-400' : ''}`}>
						{stage.title}
					</h3>
					<p className={`${stage.status === 'pending' ? 'text-gray-500' : 'text-gray-600'}`}>
						{stage.description}
					</p>
				</div>
				<div className={`ml-auto ${statusColors[stage.status].split(' ')[1]} font-medium`}>
					<i className={`${statusIcon[stage.status]} mr-1`}></i> {statusText[stage.status]}
				</div>
			</div>
			<div className={`ml-20 bg-white p-4 rounded-lg shadow-sm ${stage.status === 'pending' ? 'border border-dashed border-gray-300' : ''}`}>
				<p className={stage.status === 'pending' ? 'text-gray-500' : 'text-gray-700'}>
					{stage.message}
				</p>
				{stage.date && (
					<p className="text-gray-500 text-sm mt-2">{stage.date}</p>
				)}
			</div>
		</div>
	);
};

export default TrackingStage;