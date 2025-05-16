"use client";

import React, { useState } from 'react';
import Dropdown from '../ui/Dropdown';
import { categories } from '@/data/mockData';
import { ReportFormData } from '@/types';

const ReportForm: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [issueCategory, setIssueCategory] = useState("");
	const [formData, setFormData] = useState<ReportFormData>({
		category: "",
		location: "",
		description: "",
		name: "",
		email: "",
		phone: "",
	});
	
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	
	const handleCategorySelect = (category: string) => {
		setFormData((prev) => ({ ...prev, category }));
		setIssueCategory(category);
		setIsDropdownOpen(false);
	};
	
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
		alert("Report submitted successfully!");
		setFormData({
			category: "",
			location: "",
			description: "",
			name: "",
			email: "",
			phone: "",
		});
		setIssueCategory("");
	};
	
	return (
		<section id="report" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-4">
						Report an Issue
					</h2>
					<p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
						Fill out this simple form to report an issue in your community
					</p>
					
					<div className="bg-gray-50 rounded-xl p-8 shadow-md">
						<form onSubmit={handleSubmit}>
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<label className="block text-gray-700 font-medium mb-2">
										Issue Category
									</label>
									<Dropdown
										isOpen={isDropdownOpen}
										selectedCategory={issueCategory}
										categories={categories}
										onToggle={toggleDropdown}
										onSelect={handleCategorySelect}
									/>
								</div>
								
								<div>
									<label
										htmlFor="location"
										className="block text-gray-700 font-medium mb-2"
									>
										Location
									</label>
									<input
										type="text"
										id="location"
										name="location"
										value={formData.location}
										onChange={handleInputChange}
										className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Enter address or location description"
									/>
								</div>
							</div>
							
							<div className="mb-6">
								<label
									htmlFor="description"
									className="block text-gray-700 font-medium mb-2"
								>
									Issue Description
								</label>
								<textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleInputChange}
									rows={4}
									className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Describe the issue in detail"
								></textarea>
							</div>
							
							<div className="mb-6">
								<label className="block text-gray-700 font-medium mb-2">
									Upload Photo (Optional)
								</label>
								<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
									<div className="mb-3">
										<i className="fas fa-camera text-gray-400 text-3xl"></i>
									</div>
									<p className="text-gray-500 mb-2">
										Drag and drop a photo here or
									</p>
									<button
										type="button"
										className="text-blue-600 font-medium cursor-pointer"
									>
										Browse Files
									</button>
									<input type="file" className="hidden" accept="image/*" />
								</div>
							</div>
							
							<div className="grid md:grid-cols-3 gap-6 mb-8">
								{[
									{ id: "name", label: "Your Name", placeholder: "Enter your name" },
									{ id: "email", label: "Email Address", placeholder: "Enter your email", type: "email" },
									{ id: "phone", label: "Phone Number", placeholder: "Enter your phone number", type: "tel" }
								].map((field) => (
									<div key={field.id}>
										<label
											htmlFor={field.id}
											className="block text-gray-700 font-medium mb-2"
										>
											{field.label}
										</label>
										<input
											type={field.type || "text"}
											id={field.id}
											name={field.id}
											value={formData[field.id as keyof ReportFormData]}
											onChange={handleInputChange}
											className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
											placeholder={field.placeholder}
										/>
									</div>
								))}
							</div>
							
							<div className="flex justify-center">
								<button
									type="submit"
									className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition duration-300 cursor-pointer"
								>
									Submit Report
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReportForm;