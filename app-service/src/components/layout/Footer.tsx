import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center mb-4">
							<i className="fas fa-comments-alt text-yellow-400 text-2xl mr-2"></i>
							<h3 className="text-xl font-bold">GovWatch</h3>
						</div>
						<p className="text-gray-400 mb-4">
							Bridging the gap between citizens and government for a better community.
						</p>
						<div className="flex space-x-4">
							{['facebook-f', 'twitter', 'instagram', 'youtube'].map((social) => (
								<a key={social} href="#" className="text-gray-400 hover:text-white cursor-pointer">
									<i className={`fab fa-${social}`}></i>
								</a>
							))}
						</div>
					</div>
					
					<div>
						<h4 className="text-lg font-bold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							{['Report an Issue', 'Track Your Report', 'Issue Categories', 'Success Stories', 'About Us'].map((link) => (
								<li key={link}>
									<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					
					<div>
						<h4 className="text-lg font-bold mb-4">Government Departments</h4>
						<ul className="space-y-2">
							{['Public Works', 'Sanitation', 'Transportation', 'Public Safety', 'Environmental Services'].map((dept) => (
								<li key={dept}>
									<a href="#" className="text-gray-400 hover:text-white cursor-pointer">
										{dept}
									</a>
								</li>
							))}
						</ul>
					</div>
					
					<div>
						<h4 className="text-lg font-bold mb-4">Contact Information</h4>
						<ul className="space-y-2">
							<li className="flex items-center">
								<i className="fas fa-phone-alt text-yellow-400 mr-2"></i>
								<span className="text-gray-400">Emergency: 911</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-mobile-alt text-yellow-400 mr-2"></i>
								<span className="text-gray-400">USSD Code: *384*19803#</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-envelope text-yellow-400 mr-2"></i>
								<span className="text-gray-400">support@govwatch.gov</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-headset text-yellow-400 mr-2"></i>
								<span className="text-gray-400">Helpline: 1-800-CITIZEN</span>
							</li>
						</ul>
						
						<div className="mt-4">
							<button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer">
								<i className="fas fa-download mr-2"></i> Download Mobile App
							</button>
						</div>
					</div>
				</div>
				
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
					<p>&copy; 2025 GovWatch. All rights reserved.</p>
					<div className="flex justify-center space-x-4 mt-4">
						{['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
							<a key={link} href="#" className="hover:text-white cursor-pointer">
								{link}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;