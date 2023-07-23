import React from "react";

const NoDataFound = () => {
  return (
    <div>
      <div class="text-gray-600 text-center p-8">
        <svg
          class="h-12 w-12 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <p class="text-lg font-medium">No data found</p>
      </div>
    </div>
  );
};

export default NoDataFound;
