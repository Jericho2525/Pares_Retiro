import React from "react";

const StoreLocation = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex mx-auto flex-col items-center justify-center">
        
        <h1 className="mt-2">The Pares Retiro</h1>
        <p className="mb-4">
          The Store Location of Pares Retiro is nearby Mii Styles Couture,Purok
          4 Tuburan , Ligao CIty
        </p>
          <iframe
            width="70%"
            height="255"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=150&amp;hl=en&amp;q=Purok%205%20Mahaba%20,%20Ligao%20CIty%20,%20Albay+(The%20Pares%20Retiro)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">Pares Retiro</a>
          </iframe>
      
      </div>
    </div>
  );
};

export default StoreLocation;
