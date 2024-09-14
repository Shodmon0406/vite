import React from "react";

const Product = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <div className="w-[80%] m-auto">
      <div className="">
        <div className="flex items-center">
          <div className="bg-red-500 h-6 w-1.5 mr-2"></div>
          <span className="text-red-500 font-bold text-sm">This Month</span>
        </div>
        <h2 className="text-3xl font-bold mt-3 text-gray-900 dark:text-gray-100">
          Best Selling Products
        </h2>
      </div>
    </div>
    </div>
  );
};

export default Product;
