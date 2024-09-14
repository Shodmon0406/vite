import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Person, Menu, Close } from "@mui/icons-material";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import logo from "../../assets/logo/Group 1116606595.png";
import Switcher from "@/components/darkMode/Switcher";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/store/reducers/cart/cartSlice";
import { search } from "@/store/reducers/products/productsSlise";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const { data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    dispatch(search(value));
    setSearchQuery(value);

    if (value.trim()) {
      navigate("/search", { state: { query: value } });
    } else {
      navigate(location.pathname);
    }
  };

  const menuItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/contact"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/Products"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="All product" />
      </ListItem>
    </List>
  );

  return (
    <div className="bg-none dark:bg-gray-800 text-gray-900 dark:text-gray-50">
      <header className="w-[80%] m-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[50px] sm:h-[60px]" />
          </Link>
        </div>

        <div
          className={`hidden md:flex gap-5 sm:gap-9 ${
            windowWidth >= 1330 ? "flex" : "hidden"
          }`}
        >
          {["/", "/Contact", "/About", "/Products"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              style={
                location.pathname === path
                  ? {
                      borderBottom: "3px solid",
                      fontSize: "18px",
                      padding: "0px 3px",
                      textDecoration: "none",
                    }
                  : {
                      fontSize: "18px",
                      padding: "0px 3px",
                      textDecoration: "none",
                    }
              }
              className="text-[18px] sm:text-[20px]"
            >
              {path.replace("/", "") || "Home"}
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
          <div
            className={`w-full ${windowWidth >= 880 ? "md:w-auto" : "w-full"}`}
          >
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d8d7d7",
                  },
                  "&:hover fieldset": {
                    borderColor: "#d8d7d7",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d8d7d7",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#d8d7d7",
                },
              }}
              className="text-[#6e6e6e] dark:text-white w-full"
              id="filled-basic"
              label="What are you looking for?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton >
                      <Search className="text-[#6e6e6e] dark:text-white" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/cart">
            
              <IconButton>
                <Badge
                  badgeContent={data[0]?.productsInCart.length}
                  color="error"
                >
                  <ShoppingCart className=" dark:text-gray-50" />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/login">
              <IconButton>
                <Person className=" dark:text-gray-50" />
              </IconButton>
            </Link>
            <IconButton className="md:hidden" onClick={toggleDrawer(true)}>
              <Menu className=" dark:text-gray-50" />
            </IconButton>
            <Switcher />
          </div>
        </div>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="w-64 p-4 dark:bg-gray-800 dark:text-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Menu</span>
              <IconButton onClick={toggleDrawer(false)}>
                <Close />
              </IconButton>
            </div>
            {menuItems}
          </div>
        </Drawer>
      </header>
    </div>
  );
};

export default Header;
