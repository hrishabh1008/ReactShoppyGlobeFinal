import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const routeError = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Something went wrong.
      </h1>
      {routeError && (
        <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
          <h2 className="text-2xl font-semibold">
            Error: {routeError.status || "Unknown"}
          </h2>
          <p className="mt-2">
            {routeError.statusText ||
              routeError.message ||
              "An unexpected error occurred."}
          </p>
        </div>
      )}
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition">
          Go Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
