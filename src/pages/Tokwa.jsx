import React from "react";
import Tokwa from "../assets/Tokwa";

const Tokwa = () => {
  console.log("Tokwas to", Tokwa);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-10 ">
    
        
        {Tokwa.map((tokwa) => (
          <div key={tokwa.id} className="text-center flex justify-center items-center flex-col rounded-md  border-blue-400 w-[200px] mx-auto p-2 border-2">
            <img
              src={tokwa.imageUrl}
              alt={tokwa.name}
              style={{ width: "100px", height: "100px" }}
              className="rounded-lg"
            />
            <h1>{tokwa.name}</h1>
            <p>₱{tokwa.price}</p>
            <button className="bg-red-500 p-2 rounded-md my-2">Add To Cart</button>
          </div>
        ))}
      
    </div>
  );
};

export default Tokwa;
