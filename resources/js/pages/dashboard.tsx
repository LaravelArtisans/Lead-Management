import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { Mail, Zap, BarChart3, Database } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface NavigationCard {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    color: string;
}

const navigationCards: NavigationCard[] = [
    {
        id: 'leads',
        title: 'Leads',
        description: 'Manage and organize your leads',
        icon: Database,
        href: '#leads',
        color: 'from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20',
    },
    {
        id: 'scraping',
        title: 'Scraping',
        description: 'Collect leads from multiple sources',
        icon: Zap,
        href: '#scraping',
        color: 'from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20',
    },
    {
        id: 'campaigns',
        title: 'Campaigns',
        description: 'Run email outreach campaigns',
        icon: Mail,
        href: '#campaigns',
        color: 'from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20',
    },
    {
        id: 'analytics',
        title: 'Analytics',
        description: 'View campaign performance metrics',
        icon: BarChart3,
        href: '#analytics',
        color: 'from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Lead Management" />
            <div className="flex flex-1 flex-col gap-8 overflow-x-auto rounded-xl p-6 lg:p-8">
                {/* Header Section */}
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Lead Management</h1>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 lg:text-lg max-w-2xl">
                        Collect and manage leads from multiple sources, run targeted email outreach campaigns,
                        and track performance with real-time analytics. All in one powerful platform.
                    </p>
                </div>

                {/* Navigation Cards Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                    {navigationCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <Link
                                key={card.id}
                                href={card.href}
                                className={`group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br ${card.color} transition-all duration-300 p-6 dark:border-neutral-800 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700`}
                            >
                                {/* Background accent */}
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-neutral-900/0 dark:from-neutral-100/5 dark:to-neutral-100/0" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-4">
                                    {/* Icon */}
                                    <div className="inline-flex w-fit rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
                                        <Icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                                    </div>

                                    {/* Text */}
                                    <div className="space-y-1">
                                        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="mt-2 inline-flex opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                        <svg className="h-4 w-4 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Info Section */}
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950 lg:p-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                Quick Access
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Navigate to any section using the cards above or the sidebar menu.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                Get Started
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Begin by adding your first leads or setting up a scraping job.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                Need Help?
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Check the documentation or contact support for assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
