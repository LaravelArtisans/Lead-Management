import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface UseDebouncedSearchOptions {
    initialValue?: string;
    debounceMs?: number;
    route: string;
    preserveState?: boolean;
    preserveScroll?: boolean;
}

export function useDebouncedSearch({
    initialValue = '',
    debounceMs = 300,
    route,
    preserveState = true,
    preserveScroll = true,
}: UseDebouncedSearchOptions) {
    const [search, setSearch] = useState(initialValue);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.get(
                route,
                { search: search || undefined },
                {
                    preserveState,
                    preserveScroll,
                    replace: true,
                },
            );
        }, debounceMs);

        return () => clearTimeout(timeoutId);
    }, [search, route, debounceMs, preserveState, preserveScroll]);

    const clearSearch = () => {
        setSearch('');
        router.get(
            route,
            {},
            {
                preserveState,
                preserveScroll,
                replace: true,
            },
        );
    };

    return {
        search,
        setSearch,
        clearSearch,
    };
}
