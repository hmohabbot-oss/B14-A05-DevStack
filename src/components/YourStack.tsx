import React from 'react';
import type { Technology } from './TechCard';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export const YourStack: React.FC<YourStackProps> = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-28 shadow-sm">
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          {stack.length === 0 ? 'No Technology Selected' : `${stack.length} Technology Selected`}
        </p>
      </div>

      {/* Selected Items List or Empty State */}
      {stack.length === 0 ? (
        <div className="py-12 px-4 rounded-xl border border-dashed border-gray-200 bg-gray-50/50 text-center flex flex-col items-center justify-center">
          <p className="text-sm font-medium bg-blue-50/80 px-4 py-1.5 rounded-md text-blue-700">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 bg-white transition group"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <span className="text-[11px] text-gray-500">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-lg p-1 transition"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-red-200 text-red-600 hover:bg-red-50 transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
};