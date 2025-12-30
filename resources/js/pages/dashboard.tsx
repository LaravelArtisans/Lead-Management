import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import {
    BarChart3,
    Zap,
    Mail,
    TrendingUp,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface NavigationCard {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    color: string;
}

const navigationCards: NavigationCard[] = [
    {
        title: 'Leads',
        description: 'Manage and organize your collected leads',
        icon: BarChart3,
        href: '#/leads',
        color: 'from-blue-500 to-blue-600',
    },
    {
        title: 'Scraping',
        description: 'Collect leads from various sources',
        icon: Zap,
        href: '#/scraping',
        color: 'from-purple-500 to-purple-600',
    },
    {
        title: 'Campaigns',
        description: 'Run email outreach campaigns',
        icon: Mail,
        href: '#/campaigns',
        color: 'from-orange-500 to-orange-600',
    },
    {
        title: 'Analytics',
        description: 'View performance and campaign metrics',
        icon: TrendingUp,
        href: '#/analytics',
        color: 'from-green-500 to-green-600',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Lead Management" />
            <div className="flex flex-1 flex-col gap-8 overflow-x-auto rounded-xl p-6">
                {/* Header Section */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Lead Management
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Streamline your lead generation workflow. Collect and manage leads,
                        run email outreach campaigns, and track your performance with
                        comprehensive analytics.
                    </p>
                </div>

                {/* Navigation Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {navigationCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                            >
                                {/* Gradient Background */}
                                <div
                                    className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${card.color} opacity-10 transition-transform group-hover:scale-110`}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col gap-4">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${card.color}`}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>

                                    {/* Text */}
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Arrow Indicator */}
                                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600">
                                        <svg
                                            className="h-4 w-4 text-gray-600 transition-transform group-hover:translate-x-0.5 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Quick Stats Section (Optional) */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Leads
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    —
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                                <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Active Campaigns
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    —
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Success Rate
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    —
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
