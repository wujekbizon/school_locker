import React from "react";

const FallbackComponent = ({ text }: { text: string }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <p className="ml-4 text-lg text-gray-500">{text}</p>
    </div>
  );
};

export default FallbackComponent;
