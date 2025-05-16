import React from 'react';
import Image from "next/image";

interface BeforeAfterComparisonProps {
	beforeImage: string;
	afterImage: string;
	beforeTitle: string;
	afterTitle: string;
	beforeDate: string;
	afterDate: string;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
																		 beforeImage,
																		 afterImage,
																		 beforeTitle,
																		 afterTitle,
																		 beforeDate,
																		 afterDate
																	 }) => {
	return (
		<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<div className="h-64 relative overflow-hidden">
					<Image
						src={beforeImage}
						alt="Before repair"
						height={256}
						width={200}
						className="w-full h-full object-cover object-top"
					/>
					<div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 font-medium">
						Before
					</div>
				</div>
				<div className="p-4">
					<h4 className="font-bold text-lg mb-2">{beforeTitle}</h4>
					<p className="text-gray-600">{beforeDate}</p>
				</div>
			</div>
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<div className="h-64 relative overflow-hidden">
					<Image
						src={afterImage}
						alt="After repair"
						height={256}
						width={200}
						className="w-full h-full object-cover object-top"
					/>
					<div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 font-medium">
						After
					</div>
				</div>
				<div className="p-4">
					<h4 className="font-bold text-lg mb-2">{afterTitle}</h4>
					<p className="text-gray-600">{afterDate}</p>
				</div>
			</div>
		</div>
	);
};

export default BeforeAfterComparison;