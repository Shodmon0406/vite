import { getProducts, search } from '@/store/reducers/products/productsSlise';
import { Rating, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NumberTrick from "@/components/numberTrike/numberTrike";

const Search = () => {
  const search = useSelector((state) => state.products.search);
  console.log(search);
  
  const dispatch = useDispatch();
  
  return (
    <div className='flex flex-wrap justify-between dark:bg-gray-900'>
      {search?.products?.length > 0 ? (
        search.products.map((el) => (
          <div
            data-aos="zoom-in-down"
            key={el.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
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
                    <span className="text-white text-lg font-semibold">ADD TO CART</span>
                  </div>
                </Link>
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold text-gray-900 dark:text-gray-200">{el.productName}</p>
                <div className="flex justify-center items-center gap-4 mt-2 text-gray-700 dark:text-gray-300">
                  <p>
                    $ <NumberTrick className="text-gray-900 dark:text-gray-600" value={el.price} delay={0.5} />
                  </p>
                  <Rating readOnly value={3.5} />
                  <p>{el.quantity}</p>
                </div>
                <Link to={`/product/${el.id}`}>
                  <button className="mt-2 text-blue-500 dark:text-blue-300 hover:underline">About</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Typography variant="h6" color="text.secondary" className="dark:text-gray-400">
          В этом ценовом диапазоне нет доступных товаров.
        </Typography>
      )}
    </div>
  );
}

export default Search;
