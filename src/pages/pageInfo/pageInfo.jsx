import {
  getInfo,
  getProducts,
  postToCart,
} from "@/store/reducers/products/productsSlise";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Rating, Typography } from "@mui/material";
import NumberTrick from "@/components/numberTrike/numberTrike";

const PageInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.products.info);
  const { data } = useSelector((state) => state.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const minPrice = data?.minMaxPrice?.minPrice;
  const maxPrice = data?.minMaxPrice?.maxPrice;

  useEffect(() => {
    if (id) {
      dispatch(getInfo(id));
    }
    dispatch(getProducts([minPrice, maxPrice]));
  }, [id, dispatch]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  
  const price = info?.price;
  const displayPrice = typeof price === "number" && !isNaN(price) ? price : 0;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-4/5 mx-auto flex flex-col items-center md:flex-row p-4 rounded-lg mb-[11.8pc]">
        <div className="flex flex-col items-center md:w-1/2">
          {info?.images.map((el, index) => (
            <img
              key={index}
              src={"http://135.181.152.249:8072/images/" + el.images}
              alt={"Photo"}
              className="w-[400px] h-[600px] object-cover mb-4 rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div className="md:w-1/2 md:ml-8">
          <Typography
            variant="h4"
            component="h1"
            className="font-bold mb-2"
          >
            {info?.productName}
          </Typography>
          <div className="flex items-center my-2">
            <Rating readOnly value={Math.random() * 2 * 5} />
            <Typography
              variant="body2"
              component="p"
              className="ml-2"
            >
              (150 Reviews)
            </Typography>
          </div>
          <Typography variant="h5" component="p" className="text-red-500 font-bold my-2">
            $ <NumberTrick value={displayPrice} delay={0.5} />
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className="text-sm my-2"
          >
            {info?.description}
          </Typography>
          <hr className="my-4 border-gray-300 dark:border-gray-700" />
          <div className="my-4 flex items-center gap-12">
            <Typography
              variant="subtitle1"
              component="p"
              className="font-bold"
            >
              Colour:
            </Typography>
            <div
              style={{ backgroundColor: info?.color }}
              className="w-[30px] h-[30px] rounded-full border border-gray-300 dark:border-gray-700"
            ></div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="flex-1 rounded-full py-2 px-12"
            sx={{ padding: "5px 55px" }}
            onClick={() => {
              dispatch(postToCart(info.id));
            }}
          >
            add to cart
          </Button>
        </div>
      </div>
      <div className="w-[80%] m-auto flex justify-between py-5 gap-5">
        {data?.products?.slice(0, 4).map((el) => {
          return (
            <div key={el.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
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
          );
        })}
      </div>
    </div>
  );
};

export default PageInfo;
