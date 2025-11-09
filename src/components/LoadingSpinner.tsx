import React from 'react';

export default function LoadingSpinner(){ 
  return (
    <div className="flex items-center justify-center py-4">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-4 border-gray-200"></div>
    </div>
  );
}
