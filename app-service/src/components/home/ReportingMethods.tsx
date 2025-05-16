import React from 'react';

const ReportingMethods: React.FC = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Report Anywhere, Anytime - With or Without Internet
				</h2>
				
				<div className="grid md:grid-cols-2 gap-12">
					<div className="bg-blue-50 rounded-xl p-8 shadow-md">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
								<i className="fas fa-globe text-white text-xl"></i>
							</div>
							<h3 className="text-2xl font-bold">Online Reporting</h3>
						</div>
						<p className="text-gray-700 mb-6">
							Use our web platform to report issues with photos, detailed
							descriptions, and precise locations. Track your reports in
							real-time.
						</p>
						
						<div className="bg-white rounded-lg shadow-md p-4 mb-6">
							<div className="relative h-48 rounded-lg overflow-hidden mb-4">
								<img
									src="https://readdy.ai/api/search-image?query=A%20clean%2C%20modern%20web%20interface%20showing%20a%20report%20submission%20form%20with%20location%20map%20and%20photo%20upload%20feature.%20The%20interface%20has%20a%20blue%20and%20white%20color%20scheme%20with%20clear%20input%20fields%20and%20buttons%20on%20a%20laptop%20screen&width=600&height=400&seq=web1&orientation=landscape"
									alt="Online reporting interface"
									className="w-full h-full object-cover object-top"
								/>
							</div>
							<div className="flex justify-between">
								<span className="text-sm text-gray-500">Easy to use interface</span>
								<span className="text-sm text-gray-500">Real-time updates</span>
							</div>
						</div>
						
						<div className="flex justify-center">
							<a
								href="#report"
								className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer"
							>
								Report Online Now
							</a>
						</div>
					</div>
					
					<div className="bg-yellow-50 rounded-xl p-8 shadow-md">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
								<i className="fas fa-phone-alt text-white text-xl"></i>
							</div>
							<h3 className="text-2xl font-bold">USSD Reporting</h3>
						</div>
						<p className="text-gray-700 mb-6">
							No internet? No problem. Use our USSD code to report issues from
							any mobile phone, even without data or smartphone.
						</p>
						
						<div className="bg-white rounded-lg shadow-md p-6 mb-6">
							<div className="text-center mb-6">
								<span className="text-4xl font-bold text-yellow-600">*384*19803#</span>
								<p className="text-gray-600 mt-2">Dial this code from any phone</p>
							</div>
							
							<div className="flex flex-col space-y-4">
								{[
									"Dial *311# on your phone",
									"Select issue category",
									"Describe issue and location"
								].map((step, index) => (
									<div key={index} className="flex items-center">
										<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
											<span className="font-bold text-yellow-600">{index + 1}</span>
										</div>
										<span className="text-gray-700">{step}</span>
									</div>
								))}
							</div>
						</div>
						
						<div className="flex justify-center">
							<button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer">
								Learn More About USSD
							</button>
						</div>
					</div>
				</div>
				
				<div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
					<h3 className="text-2xl font-bold mb-4">Report in 3 Simple Steps</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								icon: "fas fa-clipboard-list",
								title: "Select Category",
								description: "Choose the type of issue you want to report"
							},
							{
								icon: "fas fa-map-marker-alt",
								title: "Provide Details",
								description: "Describe the issue and location"
							},
							{
								icon: "fas fa-paper-plane",
								title: "Submit & Track",
								description: "Submit your report and track progress"
							}
						].map((step, index) => (
							<div key={index} className="p-4">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<i className={`${step.icon} text-2xl`}></i>
								</div>
								<h4 className="text-xl font-semibold mb-2">{step.title}</h4>
								<p className="text-blue-100">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReportingMethods;