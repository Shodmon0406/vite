import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, delProduct, getCart, minus, plus } from "@/store/reducers/cart/cartSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import NumberTrick from "@/components/numberTrike/numberTrike";

const Cart = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (data[0]?.productsInCart) {
      const { newSubtotal, newTotalProducts, newTotal } = data[0].productsInCart.reduce(
        (acc, product) => {
          acc.newSubtotal += product.product.price * product.quantity;
          acc.newTotalProducts += product.quantity;
          acc.newTotal += product.product.price * product.quantity;
          return acc;
        },
        { newSubtotal: 0, newTotalProducts: 0, newTotal: 0 }
      );
      setSubtotal(newSubtotal);
      setTotalProducts(newTotalProducts);
      setTotal(newTotal);
    }
  }, [data]);

  const isCartEmpty = data[0]?.productsInCart?.length === 0;

  return (
    <div className="dark:bg-gray-800 shadow-lg rounded-lg]">
      <div className="w-[80%] mx-auto py-10 pt-[6pc] px-4">
      {isCartEmpty ? (
        <div className="flex flex-col items-center gap-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10">
          <img
            src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user"
            alt="Empty Cart"
            className="w-80 h-80 object-cover rounded-lg shadow-md"
          />
          <p className="text-2xl sm:text-xl font-bold text-gray-700 dark:text-gray-200">Your Cart is Empty</p>
          <Button
            sx={{
              padding: "12px 50px",
              background: "#1976d2",
              color: "white",
              fontSize: "20px",
              textTransform: "uppercase",
              borderRadius: "8px",
              "&:hover": {
                background: "#115293",
              },
            }}
            variant="contained"
          >
            <Link to="/Products" style={{ color: "white", textDecoration: "none" }}>
              Add Products
            </Link>
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg gap-10">
          <TableContainer component={Paper} className="w-full md:w-3/4">
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">Product</TableCell>
                  <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">Price</TableCell>
                  <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">Quantity</TableCell>
                  <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">Subtotal</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data[0]?.productsInCart?.map((el) => (
                  <TableRow key={el.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src={"http://135.181.152.249:8072/images/" + el.product.image}
                          className="w-16 h-16 object-cover rounded-md shadow-sm"
                          alt="Product"
                        />
                        <p className="text-lg sm:text-base font-medium text-gray-800 dark:text-gray-200">
                          {el.product.productName}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">
                      ${el.product.price}
                    </TableCell>
                    <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(minus(el.id))}
                          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          -
                        </button>
                        <p className="text-2xl sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {el.quantity}
                        </p>
                        <button
                          onClick={() => dispatch(plus(el.id))}
                          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-base sm:text-sm text-gray-800 dark:text-gray-200">
                      ${+el.product.price * +el.quantity}
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => dispatch(delProduct(el.id))}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                      >
                        <Close />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="w-full md:w-1/4 flex flex-col gap-4 px-5 py-5">
            <div className="flex justify-between text-gray-800 dark:text-gray-200">
              <p className="text-lg sm:text-base font-medium">Subtotal:</p>
              <p className="text-lg sm:text-base font-bold">$ <NumberTrick value={subtotal.toFixed(2)} delay={0.5} /></p>
            </div>
            <div className="flex justify-between text-gray-800 dark:text-gray-200">
              <p className="text-lg sm:text-base font-medium">Total Products:</p>
              <p className="text-lg sm:text-base font-bold">{totalProducts} шт</p>
            </div>
            <div className="flex justify-between text-gray-800 dark:text-gray-200 mb-6">
              <p className="text-lg sm:text-base font-medium">Total:</p>
              <p className="text-lg sm:text-base font-bold">$ <NumberTrick value={total.toFixed(2)} delay={1} /></p>
            </div>
            <div className="flex justify-end">
              <Button
                variant="contained"
                sx={{
                  padding: "10px 30px",
                  background: "#1976d2",
                  color: "white",
                  fontSize: "16px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  "&:hover": {
                    background: "#115293",
                  },
                }}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      )}
      {!isCartEmpty && (
        <div className="w-full flex flex-col md:flex-row justify-between py-6 rounded-lg mt-10 gap-4">
          <Button
            sx={{
              padding: "10px 40px",
              background: "none",
              color: "black",
              border: "2px solid grey",
              fontSize: "18px",
              borderRadius: "8px",
              textTransform: "uppercase",
              "&:hover": {
                background: "#767676",
                color: "white",
                borderColor: "black",
              },
            }}
            variant="outlined"
          >
            <Link to="/Products" style={{ color: "inherit", textDecoration: "none" }}>
              Return To Shop
            </Link>
          </Button>
          <Button
            sx={{
              padding: "10px 40px",
              background: "none",
              color: "red",
              border: "2px solid red",
              fontSize: "18px",
              borderRadius: "8px",
              textTransform: "uppercase",
              "&:hover": {
                background: "red",
                color: "white",
                borderColor: "white",
              },
            }}
            variant="outlined"
            onClick={() => dispatch(clearAll())}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
