import { SearchIcon } from "lucide-react";
import { Input } from "@/Components/ui/input";
import React from 'react';

type SearchBarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative w-full sm:w-64">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search projects..."
                className="w-full pl-8"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
