import React from "react";
import image2 from "../../../assets/images/Services (1).png";
import image3 from "../../../assets/images/Services (2).png";
import image1 from "./../../../assets/images/Services.png";

const Section6 = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <div className="w-full max-w-4xl m-auto flex flex-col md:flex-row justify-between py-16  ">
        <div className="text-center mb-8 md:mb-0 flex-1">
          <img
            src={image1}
            alt="Free and Fast Delivery"
            className="block mx-auto mb-4"
          />
          <p className="text-lg font-semibold">FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="text-center mb-8 md:mb-0 flex-1">
          <img
            src={image2}
            alt="24/7 Customer Service"
            className="block mx-auto mb-4"
          />
          <p className="text-lg font-semibold">24/7 CUSTOMER SERVICE</p>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="text-center flex-1">
          <img
            src={image3}
            alt="Money Back Guarantee"
            className="block mx-auto mb-4"
          />
          <p className="text-lg font-semibold">MONEY BACK GUARANTEE</p>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
