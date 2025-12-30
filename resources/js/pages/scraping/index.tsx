import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Scraping',
        href: '/scraping',
    },
];

export default function Scraping() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Scraping" />
            <div className="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Scraping
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Collect leads from various sources automatically.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <svg
                                        className="h-6 w-6 text-purple-600 dark:text-purple-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                No scraping jobs
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Set up a new scraping job to start collecting leads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
