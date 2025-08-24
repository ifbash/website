import React from 'react';
import { Brain, LayoutDashboard, Users } from 'lucide-react';

interface PlaceholderImageProps {
  title: string;
  type?: 'dashboard' | 'ai' | 'crm';
  className?: string;
  gradient?: string;
}

export function PlaceholderImage({ 
  title, 
  type = 'dashboard',
  className = "", 
  gradient 
}: PlaceholderImageProps) {
  const Icon = type === 'ai' ? Brain : type === 'crm' ? Users : LayoutDashboard;
  const defaultGradient = type === 'ai' 
    ? "from-purple-600 to-pink-600"
    : type === 'crm'
    ? "from-blue-600 to-cyan-600"
    : "from-violet-600 to-blue-600";

  return (
    <div 
      className={`relative rounded-xl overflow-hidden bg-gradient-to-r ${gradient || defaultGradient} ${className}`}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative p-6 flex flex-col items-center justify-center h-full">
        <Icon className="h-12 w-12 text-white/90 mb-4" />
        <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
}