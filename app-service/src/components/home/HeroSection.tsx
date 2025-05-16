import React from 'react';

const HeroSection: React.FC = () => {
	return (
		<section
			className="relative overflow-hidden"
			style={{
				backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20modern%20cityscape%20with%20diverse%20citizens%20engaging%20with%20government%20services%2C%20showing%20a%20community-focused%20environment%20with%20subtle%20blue%20overlay.%20The%20image%20has%20clean%20lines%20and%20a%20professional%20look%20with%20people%20of%20different%20ages%20and%20backgrounds%20in%20an%20urban%20setting&width=1440&height=600&seq=hero1&orientation=landscape')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "600px",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
			<div className="container mx-auto px-4 h-full flex items-center relative z-10">
				<div className="max-w-2xl text-white">
					<h1 className="text-5xl font-bold leading-tight mb-4">
						Your Voice Matters - Report Issues Directly to Government
					</h1>
					<p className="text-xl mb-8">
						Quick and easy way to report community issues and track government responses.
						Together, we can build a better community.
					</p>
					<div className="flex flex-wrap gap-4">
						<a
							href="#report"
							className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 cursor-pointer"
						>
							Report an Issue
						</a>
						<a
							href="#track"
							className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer"
						>
							Track Your Report
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;