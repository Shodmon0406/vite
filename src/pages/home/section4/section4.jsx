import { getProducts, postToCart } from "@/store/reducers/products/productsSlise";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import NumberTrick from "@/components/numberTrike/numberTrike";

const Section4 = () => {
  const { data } = useSelector((state) => state.products);
  const minPrice = data?.minMaxPrice?.minPrice;
  const maxPrice = data?.minMaxPrice?.maxPrice;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts([minPrice, maxPrice]));
  }, [dispatch, minPrice, maxPrice]);

  return (
    <div className="dark:bg-gray-900 py-5">
      <div className="w-[80%] m-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data?.products?.slice(0, 4).map((el) => {
          return (
            <div
              key={el.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <Link
                  onClick={() => dispatch(postToCart(el.id))}
                  className="block relative"
                >
                  <img
                    className="w-full h-[300px] md:h-[450px] object-cover rounded-md transition-transform duration-500 hover:scale-110"
                    src={"http://135.181.152.249:8072/images/" + el.image}
                    alt={el.productName}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      ADD TO CART
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold text-gray-900 dark:text-gray-200">
                  {el.productName}
                </p>
                <div className="flex justify-center items-center gap-4 mt-2 text-gray-700 dark:text-gray-300">
                  <p>
                    $ <NumberTrick
                      className="text-gray-900 dark:text-gray-600"
                      value={el.price}
                      delay={0.5}
                    />
                  </p>
                  <Rating readOnly value={3.5} />
                  <p>{el.quantity}</p>
                </div>
                <Link to={`/product/${el.id}`}>
                  <button className="mt-2 text-blue-500 dark:text-blue-300 hover:underline">
                    About
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
