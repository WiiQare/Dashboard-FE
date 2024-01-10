import React from 'react';

interface SimpleHeaderProps {
    title: string;
    describe?: string;
    children: React.ReactNode
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title, describe, children }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:items-center justify-between">
            <div className="space-y-2">
                <h2 className="font-bold text-xl text-gray-700">{title}</h2>
                <span className="text-xs text-gray-500">{describe}</span>
            </div>
            {children}
        </div>
    );
};

export default SimpleHeader;
