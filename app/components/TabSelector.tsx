import React from 'react';

interface TabSelectorProps {
    tabs: { title: string, path: string }[];
    onSelect: (path: string) => void;
    selectedTab: string;
}

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, onSelect, selectedTab }) => {
    return (
        <div className="flex flex-row mb-4">
            {tabs.map((tab, index) => (
                <button
                    key={tab.path}
                    className={`px-4 py-2 m-1 ${selectedTab === tab.path ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded`}
                    onClick={() => onSelect(tab.path)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
};

export default TabSelector;
