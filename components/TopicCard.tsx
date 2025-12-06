import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  onClick: () => void;
  selected?: boolean;
}

export const TopicCard: React.FC<TopicCardProps> = ({ title, icon: Icon, description, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group p-6 rounded-2xl border-2 text-left transition-all duration-300 w-full h-full
        ${selected 
          ? 'border-teal-500 bg-teal-50 shadow-lg scale-[1.02]' 
          : 'border-white bg-white hover:border-teal-200 hover:shadow-md hover:-translate-y-1'
        }
      `}
    >
      <div className={`p-3 rounded-xl inline-block mb-4 transition-colors ${selected ? 'bg-teal-100 text-teal-700' : 'bg-teal-50 text-teal-600 group-hover:bg-teal-100'}`}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      
      {selected && (
        <div className="absolute top-4 right-4 h-3 w-3 bg-teal-500 rounded-full animate-pulse" />
      )}
    </button>
  );
};