import { EmptyState } from '@/components/empty-state';
import { LeadsTable } from '@/components/leads-table';
import { Pagination } from '@/components/pagination';
import { SearchInput } from '@/components/search-input';
import { useDebouncedSearch } from '@/hooks/use-debounced-search';
import AppLayout from '@/layouts/app-layout';
import { index } from '@/routes/leads';
import {
    type BreadcrumbItem,
    type Lead,
    type PaginatedData,
} from '@/types';
import { Head } from '@inertiajs/react';
import { Search, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Leads',
        href: index().url,
    },
];

interface LeadsIndexProps {
    leads: PaginatedData<Lead>;
    filters: {
        search?: string;
    };
}

export default function LeadsIndex({ leads, filters }: LeadsIndexProps) {
    const hasLeads = leads.data.length > 0;
    const { search, setSearch, clearSearch } = useDebouncedSearch({
        initialValue: filters.search || '',
        route: '/leads',
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leads" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Leads</h1>
                        <p className="text-muted-foreground mt-1 text-sm">
                            {hasLeads
                                ? `Showing ${leads.from} to ${leads.to} of ${leads.total} leads`
                                : filters.search
                                  ? 'No leads found matching your search'
                                  : 'Manage your leads and contacts'}
                        </p>
                    </div>
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClear={clearSearch}
                        placeholder="Search by name, email, or phone..."
                        className="w-full sm:w-64"
                    />
                </div>

                {!hasLeads ? (
                    <EmptyState
                        icon={filters.search ? Search : Users}
                        title={filters.search ? 'No leads found' : 'No leads yet'}
                        description={
                            filters.search
                                ? 'Try adjusting your search terms to find what you are looking for.'
                                : 'Get started by adding your first lead to track and manage your contacts.'
                        }
                    />
                ) : (
                    <div className="flex flex-col overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <LeadsTable leads={leads.data} />
                        <Pagination links={leads.links} />
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
