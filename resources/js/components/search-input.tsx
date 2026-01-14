import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { type ComponentProps } from 'react';

interface SearchInputProps extends Omit<ComponentProps<'input'>, 'type'> {
    value: string;
    onClear: () => void;
    placeholder?: string;
}

export function SearchInput({
    value,
    onClear,
    placeholder = 'Search...',
    className,
    ...props
}: SearchInputProps) {
    return (
        <div className={`relative ${className || ''}`}>
            <Search className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                className="pl-9 pr-9"
                {...props}
            />
            {value && (
                <button
                    type="button"
                    onClick={onClear}
                    className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="size-4" />
                </button>
            )}
        </div>
    );
}
