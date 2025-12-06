import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  message: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-teal-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-white p-4 rounded-full shadow-lg border border-teal-100 mb-6">
           <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{message}</h3>
      <p className="text-gray-500 max-w-xs mx-auto">AI đang suy nghĩ bài toán thú vị nhất dành cho bạn...</p>
    </div>
  );
};