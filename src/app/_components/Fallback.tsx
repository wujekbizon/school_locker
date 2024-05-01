import React from "react";

const FallbackComponent = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <p className="ml-4 text-lg text-gray-500">Loading tests...</p>
    </div>
  );
};

export default FallbackComponent;
