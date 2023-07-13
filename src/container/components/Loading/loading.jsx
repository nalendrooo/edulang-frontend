import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-opacity-20 bg-slate-600">
          <div className="fixed h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] right-auto z-30 top-1/2" />
        </div>
      )}
    </div>
  );
};

export default Loading;
