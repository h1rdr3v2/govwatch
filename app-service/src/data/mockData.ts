import { Category, Testimonial, TrackingStage } from '@/types';

export const categories: Category[] = [
	{
		name: "Infrastructure",
		icon: "fa-road",
		description:
			"Report issues with roads, bridges, public buildings, and other infrastructure",
	},
	{
		name: "Public Services",
		icon: "fa-water",
		description:
			"Report issues with water supply, electricity, waste management, and other public services",
	},
	{
		name: "Safety Concerns",
		icon: "fa-shield-alt",
		description:
			"Report safety hazards, dangerous situations, or security concerns",
	},
	{
		name: "Environmental Issues",
		icon: "fa-leaf",
		description:
			"Report pollution, illegal dumping, or other environmental concerns",
	},
	{
		name: "Others",
		icon: "fa-clipboard-list",
		description:
			"Report any other issues not covered by the categories above",
	},
];

export const testimonials: Testimonial[] = [
	{
		name: "Sarah Johnson",
		role: "Community Member",
		text: "I reported a broken street light that had been out for months. Within a week, it was fixed! This platform really works.",
	},
	{
		name: "Michael Chen",
		role: "Local Business Owner",
		text: "The pothole outside my shop was affecting business. I reported it through the USSD code and received updates until it was repaired. Impressive service!",
	},
	{
		name: "Amina Patel",
		role: "School Teacher",
		text: "Our school crossing had no signs. I submitted a report with photos, and within 10 days, new crossing signs were installed. This platform is making our community safer.",
	},
];

export const trackingStages: TrackingStage[] = [
	{
		title: "Submitted",
		description: "Your report has been received",
		icon: "fa-clipboard-check",
		status: "complete",
		date: "May 15, 2025 - 10:23 AM",
		message: "Report ID: #23456 has been successfully submitted. You will receive a confirmation SMS shortly."
	},
	{
		title: "In Review",
		description: "Officials are reviewing your report",
		icon: "fa-search",
		status: "complete",
		date: "May 16, 2025 - 09:15 AM",
		message: "Your report has been assigned to the Department of Public Works. Initial assessment is underway."
	},
	{
		title: "In Progress",
		description: "Work is being done to resolve the issue",
		icon: "fa-tools",
		status: "current",
		date: "May 17, 2025 - 11:30 AM",
		message: "Maintenance team has been dispatched to the location. Estimated completion within 48 hours."
	},
	{
		title: "Resolved",
		description: "Issue has been fixed",
		icon: "fa-flag-checkered",
		status: "pending",
		message: "This stage will be updated once the issue has been resolved."
	}
];

export const stats = [
	{ value: "85%", label: "Issues Resolved", description: "Within target timeframe" },
	{ value: "48hrs", label: "Average Response", description: "Initial assessment time" },
	{ value: "92%", label: "Satisfaction Rate", description: "From citizen feedback" }
];