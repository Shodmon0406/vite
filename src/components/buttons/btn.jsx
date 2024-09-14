import { Button } from "@mui/material";
import "./btn.css";
import { Link } from "react-router-dom";
const Btn = (props) => {
  return (
    <div className="mt-5 text-center">
      <Link to={"/Products"}>
        <button
          className="btn-bol"
          // style={{
          //   backgroundColor: "#DB4444",
          //   padding: "16px 48px",
          //   gap: "10px",
          //   borderRadius: "4px",
          //   fontFamily: "Poppins",
          //   fontWeight: "500",
          //   lineHeight: "24px",
          // }}
        >
          {props.value}
        </button>
      </Link>
    </div>
  );
};

export default Btn;
