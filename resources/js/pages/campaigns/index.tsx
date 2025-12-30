import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Campaigns',
        href: '/campaigns',
    },
];

export default function Campaigns() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Campaigns" />
            <div className="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Campaigns
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Create and manage your email outreach campaigns.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                                    <svg
                                        className="h-6 w-6 text-orange-600 dark:text-orange-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                No campaigns yet
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Create your first email campaign to start reaching out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
