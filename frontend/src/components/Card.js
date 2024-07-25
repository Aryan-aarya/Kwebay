import React from 'react'
import rupee from "../images/rupee.png"
import product from "../images/product.png"

function Card(){
    return(
      <div className="flex-col bg-white w-56 h-fit shadow-xl p-3 rounded-lg text-black">
          <div className="bg-gray-200 w-full h-64 rounded-lg p-5">
            <img src={product} className="w-full"/>
          </div>
          <p className="font-semibold text-sm px-1 py-1 leading-tight">Beach Tropical Printed Stone Grey Half Sleeve T Shirt</p>
          <div className="flex flex-row my-1 align-middle items-center">       
            <img src={rupee} className="size-5 ml-1"/>  
            <p className="font-bold ml-2">$349</p> 
            <p className="font-md ml-1 line-through text-gray-500">$799</p> 
            <div className="w-full bg-gray-500 h-6 ml-4 mt-1 mr-1 rounded-lg">
              <p className="text-sm font-semibold text-white text-center">47% OFF</p>
            </div>
          </div>
          <button className="bg-black hover:bg-zinc-800 text-white w-full rounded-lg py-1 mt-4">Add to Cart</button>
        </div>
    )
  }

export default Card