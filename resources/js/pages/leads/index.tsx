import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Leads',
        href: '/leads',
    },
];

export default function Leads() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leads" />
            <div className="flex flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-6">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Leads
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage and organize all your collected leads in one place.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <svg
                                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                No leads yet
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Start by creating your first lead or importing existing data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
