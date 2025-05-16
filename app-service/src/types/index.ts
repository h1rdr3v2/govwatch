export interface Category {
	name: string;
	icon: string;
	description: string;
}

export interface Testimonial {
	name: string;
	role: string;
	text: string;
}

export interface TrackingStage {
	title: string;
	description: string;
	icon: string;
	status: 'complete' | 'current' | 'pending';
	date?: string;
	message: string;
}

export interface ReportFormData {
	category: string;
	location: string;
	description: string;
	name: string;
	email: string;
	phone: string;
}