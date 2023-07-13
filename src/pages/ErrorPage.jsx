import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center w-screen min-h-screen gap-2 text-center">
      <div className="w-full max-w-sm font-bold">
        <h1 className="mb-2 text-6xl font-bold text-blue-600">
          { error.status}
          {' '}
          !
        </h1>
        <p className="mb-8 font-medium text-slate-500">
          Oops! Sorry, an unexpected error has occured
        </p>
        <p className="text-slate-500 font-xs">
          {error.statusText}
        </p>
        <p className="text-slate-500 font-xs">
          {error.error.message}
        </p>

      </div>
    </div>
  );
}

export default ErrorPage;
