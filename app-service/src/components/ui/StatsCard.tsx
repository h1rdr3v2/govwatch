import React from 'react';

interface StatsCardProps {
	value: string;
	label: string;
	description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, description }) => {
	return (
		<div className="bg-blue-50 rounded-xl p-6 text-center">
			<div className="text-blue-600 text-4xl font-bold mb-2">{value}</div>
			<div className="text-gray-700 font-medium">{label}</div>
			<div className="text-gray-500 text-sm mt-2">{description}</div>
		</div>
	);
};

export default StatsCard;