import { type Lead } from '@/types';

interface LeadsTableProps {
    leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-sidebar-border/70 bg-muted/50 dark:border-sidebar-border">
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                            Company
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead, index) => (
                        <tr
                            key={lead.id}
                            className={`border-b border-sidebar-border/70 transition-colors hover:bg-muted/50 dark:border-sidebar-border ${
                                index === leads.length - 1 ? 'border-b-0' : ''
                            }`}
                        >
                            <td className="px-6 py-4 text-sm font-medium">
                                {lead.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                                {lead.company || (
                                    <span className="text-muted-foreground/50">
                                        —
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                                {lead.email ? (
                                    <a
                                        href={`mailto:${lead.email}`}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {lead.email}
                                    </a>
                                ) : (
                                    <span className="text-muted-foreground/50">
                                        —
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                                {lead.phone ? (
                                    <a
                                        href={`tel:${lead.phone}`}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {lead.phone}
                                    </a>
                                ) : (
                                    <span className="text-muted-foreground/50">
                                        —
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
