import { Button } from '@/components/ui/button';
import { type PaginationLink } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    links: PaginationLink[];
}

export function Pagination({ links }: PaginationProps) {
    if (links.length <= 3) {
        return null;
    }

    // Remove first (previous) and last (next) from the main links array
    const [previous, ...pageLinks] = links.slice(0, -1);
    const next = links[links.length - 1];

    return (
        <div className="flex flex-col gap-4 border-t border-sidebar-border/70 px-6 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-sidebar-border">
            <div className="flex items-center justify-center gap-2">
                {previous.url ? (
                    <Button variant="outline" size="sm" asChild>
                        <Link href={previous.url} preserveScroll>
                            <ChevronLeft className="size-4" />
                            <span className="hidden sm:inline">Previous</span>
                        </Link>
                    </Button>
                ) : (
                    <Button variant="outline" size="sm" disabled>
                        <ChevronLeft className="size-4" />
                        <span className="hidden sm:inline">Previous</span>
                    </Button>
                )}
            </div>

            <div className="flex items-center justify-center gap-1 overflow-x-auto">
                {pageLinks.map((link) => {
                    if (link.url === null) {
                        return (
                            <span
                                key={link.label}
                                className="px-2 py-1 text-sm text-muted-foreground sm:px-3"
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        );
                    }

                    return link.active ? (
                        <Button
                            key={link.label}
                            variant="default"
                            size="sm"
                            disabled
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        </Button>
                    ) : (
                        <Button key={link.label} variant="outline" size="sm" asChild>
                            <Link href={link.url} preserveScroll>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </Link>
                        </Button>
                    );
                })}
            </div>

            <div className="flex items-center justify-center gap-2">
                {next.url ? (
                    <Button variant="outline" size="sm" asChild>
                        <Link href={next.url} preserveScroll>
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="size-4" />
                        </Link>
                    </Button>
                ) : (
                    <Button variant="outline" size="sm" disabled>
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="size-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
