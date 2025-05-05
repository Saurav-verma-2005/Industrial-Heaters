import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </div>
  );
}