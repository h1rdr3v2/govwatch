import React from 'react';
import { Category } from '../../types';

interface DropdownProps {
	isOpen: boolean;
	selectedCategory: string;
	categories: Category[];
	onToggle: () => void;
	onSelect: (category: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
											   isOpen,
											   selectedCategory,
											   categories,
											   onToggle,
											   onSelect
										   }) => {
	return (
		<div className="relative">
			<button
				type="button"
				className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
				onClick={onToggle}
			>
				<div className="flex justify-between items-center">
					<span>{selectedCategory || "Select Category"}</span>
					<i className={`fas fa-chevron-${isOpen ? "up" : "down"} text-gray-400`}></i>
				</div>
			</button>
			
			{isOpen && (
				<div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
					{categories.map((category, index) => (
						<div
							key={index}
							className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
							onClick={() => onSelect(category.name)}
						>
							<i className={`fas ${category.icon} text-blue-600 mr-2`}></i>
							{category.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;