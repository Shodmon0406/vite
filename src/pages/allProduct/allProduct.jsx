import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
  CardContent,
  CardActions,
  Button,
  Typography,
  Slider,
  TextField,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getCategori } from "@/store/reducers/categori/categoriSlise";
import { getBrand } from "@/store/reducers/brand/brandSlise";
import { getInfoByBrand, getInfoBYSubCategory, getProducts, postToCart } from "@/store/reducers/products/productsSlise";
import { Link } from "react-router-dom";
import { getCart } from "@/store/reducers/cart/cartSlice";
import NumberTrick from "@/components/numberTrike/numberTrike";
import Aos from "aos";

const AllProduct = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [checkCategori, setCheckCategori] = useState(true);
  const [checkBrand, setCheckBrand] = useState(true);
  const product = useSelector((state) => state.products.data);
  const { data } = useSelector((state) => state.categori);
  const brand = useSelector((state) => state.brand.data);
  const minPrice = product?.minMaxPrice?.minPrice;
  const maxPrice = product?.minMaxPrice?.maxPrice;
  const [value, setValue] = useState([minPrice, maxPrice]);
  const [idx, setIdx] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategori());
    dispatch(getBrand());
    dispatch(getProducts(value));
    dispatch(getCart());

    Aos.init({
      duration: 1200,
    });
  }, [dispatch, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMinChange = (event) => {
    setValue([+event.target.value, maxPrice]);
  };

  const handleMaxChange = (event) => {
    setValue([minPrice, +event.target.value]);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white pb-5">
      <div className="w-[80%] m-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Div Accardions */}
        <div className="space-y-4">
          <Accordion defaultExpanded className="border border-gray-300 dark:border-gray-700 shadow-md rounded-[20px]">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-[20px]"
            >
              <span className="text-lg font-semibold dark:text-gray-300">Категория</span>
            </AccordionSummary>
            {(checkCategori ? data.slice(0, 4) : data).map((e) => (
              <AccordionDetails key={e.id} className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2">
                <p
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => {
                    setOpenMenu(true);
                    setIdx(e.id);
                  }}
                  data-aos="fade-up"
                >
                  {e.categoryName}
                </p>
              </AccordionDetails>
            ))}
            <AccordionDetails
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 font-bold cursor-pointer"
              onClick={() => setCheckCategori(!checkCategori)}
              data-aos="fade-up"
            >
              {checkCategori ? "Развернуть" : "Свернуть"}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded className="border border-gray-300 dark:border-gray-700 shadow-md rounded-[20px]">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-[20px]"
            >
              <span className="text-lg font-semibold dark:text-gray-300">Бренд</span>
            </AccordionSummary>
            {(checkBrand ? brand.slice(0, 4) : brand).map((e) => (
              <AccordionDetails key={e.id} className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(getInfoByBrand(e.id));
                  }}
                  data-aos="fade-up"
                >
                  {e.brandName}
                </p>
              </AccordionDetails>
            ))}
            <AccordionDetails
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 font-bold cursor-pointer"
              onClick={() => setCheckBrand(!checkBrand)}
              data-aos="fade-up"
            >
              {checkBrand ? "Развернуть" : "Свернуть"}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded className="border border-gray-300 dark:border-gray-700 shadow-md rounded-[20px]">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-[20px]"
            >
              <span className="text-lg font-semibold dark:text-gray-300">Цена</span>
            </AccordionSummary>
            <AccordionDetails className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 font-bold">
              <Box sx={{ width: 300, textAlign: "center" }}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={minPrice}
                  max={maxPrice}
                  sx={{ mb: 2 }}
                  data-aos="fade-up"
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <TextField
                    className="text-black dark:text-gray-300"
                    value={value[0]}
                    onChange={handleMinChange}
                    sx={{ width: "45%" }}
                    inputProps={{ type: "number" }}
                    data-aos="fade-up"
                  />
                  <TextField
                    value={value[1]}
                    onChange={handleMaxChange}
                    sx={{ width: "45%" }}
                    inputProps={{ type: "number" }}
                    data-aos="fade-up"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{ width: "100%", padding: "10px 0px", fontSize: "20px" }}
                  onClick={() => dispatch(getProducts(value))}
                  data-aos="fade-up"
                >
                  Применить
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex justify-between gap-y-10 gap-x-6 flex-wrap">
          {openMenu && (
            <div
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
              className="shadow-lg w-[10%] px-10 text-center h-[200px] absolute z-[1] bg-white dark:bg-gray-800 left-[27.7%]"
              data-aos="fade-left"
            >
              {data.map((el) => (
                <div key={el.id}>
                  {el.subCategories.map((sub) => (
                    <p
                      key={sub.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(getInfoBYSubCategory(sub.id));
                      }}
                      data-aos="fade-left"
                    >
                      {el.id === idx && sub.subCategoryName}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {product?.products?.length > 0 ? (
            product.products.map((el) => (
              <div
                data-aos="zoom-in-down"
                key={el.id}
                className="w-[350px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
            ))
          ) : (
            <Typography variant="h6" color="text.secondary" className="dark:text-gray-400">
              В этом ценовом диапазоне нет доступных товаров.
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
