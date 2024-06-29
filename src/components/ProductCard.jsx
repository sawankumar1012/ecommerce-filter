import React from "react";

const ProductCard = ({ title = "Product", image='/notfound.jpg', price='0.00', desc='  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod fuga esse, delectus tenetur accusamus repellendus error voluptates. Quod optio eos beatae saepe debitis consequuntur. ' }) => {
  return (
    <div className="rounded-md w-full min-h-[50vh] text-center  bg-slate-100 p-4 md:p-8">
      <p className="mt-2 truncate hover: ">{title}</p>
      <img src={image} className='mt-2 mx-auto w-40 h-40 object-fit rounded-md shadow-md md:w-50 md:h-50 bg-white' ></img>
    <p className="mt-2">${price}</p>
    <div className="w-full mt-2 ">
    <p className="truncate overflow-hidden ">{desc}</p>
    </div>
    <button className='bg-black text-white mt-6 text-md w-full p-2 rounded-lg'>Buy Now</button>
  
    </div>
  );
};

export default ProductCard;
