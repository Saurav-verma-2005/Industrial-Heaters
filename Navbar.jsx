import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Industrial Heaters</h1>
      <div>
        <Link className="px-3" to="/">Home</Link>
        <Link className="px-3" to="/about">About</Link>
        <Link className="px-3" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}