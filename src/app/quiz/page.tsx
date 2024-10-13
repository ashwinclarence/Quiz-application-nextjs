import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center">Question 1 of 10</h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi dignissimos non voluptas nostrum? Vitae eveniet et, amet
            illum, dolores maiores exercitationem, aperiam sed ratione
            dignissimos doloremque cupiditate. Et, culpa.
          </p>

          <div className="mt-6 space-y-4">
            {/* {options.map((option, index) => ( */}
            <button
              key={1}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              something
            </button>
            <button
              key={1}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              something
            </button>
            <button
              key={1}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              something
            </button>
            <button
              key={1}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              something
            </button>
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
