import React from 'react'

const ShimmerCard = () => {
  return (
    <div className="bg-white p-4 rounded shadow animate-pulse space-y-4">
      <div className="h-40 bg-gray-300 rounded" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
      <div className="h-8 bg-gray-300 rounded w-full" />
    </div>
  );
}

export default ShimmerCard
