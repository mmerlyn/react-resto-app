import React from 'react';

export default function HomePage() {
  return (
    <div className="relative">
      <img
        src="/images/resto.jpg"
        alt="Restaurant"
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to React Resto</h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Discover our delicious menu, customize your order, and enjoy fast checkout — all in one place.
        </p>
      </div>
    </div>
  );
}
