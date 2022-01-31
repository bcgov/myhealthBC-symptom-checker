import React from 'react';

export const Spinner = () => {
  return (
    <div className='flex h-full items-center justify-center '>
      <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
    </div>
  );
};
