import React from 'react';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}
    
export const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onAdd }) => {
  return (
    <div className={`flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 bg-white ${
      isAdded ? 'border-pink-200 shadow-sm' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
    }`}>
      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain rounded" />
          <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">
            {tech.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="mt-4 text-xl font-bold text-gray-900">{tech.name}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed min-h-[40px]">
          {tech.description}
        </p>

        {/* Metadata Chips */}
        <div className="mt-5 flex items-center gap-2 flex-wrap text-xs font-medium text-gray-600">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{tech.category}</span>
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{tech.difficulty}</span>
          <span className="flex items-center gap-1 text-gray-700 ml-auto">
            <span className="text-amber-400">★</span> {tech.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        {isAdded ? (
          <button
            disabled
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold border border-pink-200 bg-pink-50/60 text-pink-600 cursor-not-allowed flex items-center justify-center gap-1.5 transition"
          >
            <span>✓</span> Added to Stack
          </button>
        ) : (
          <button
            onClick={() => onAdd(tech)}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-[#0d1117] text-white hover:bg-gray-800 transition shadow-sm active:scale-[0.99]"
          >
            Add to Stack
          </button>
        )}
      </div>
    </div>
  );
};