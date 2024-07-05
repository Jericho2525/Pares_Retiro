import { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useStore } from "../store/Store";

const Cart = () => {
  const { cart, removeCart, clearCart } = useStore((state) => ({
    cart: state.cart,
    removeCart: state.removeCart,
    clearCart: state.clearCart,
  }));
  const [money, setMoney] = useState();

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const calculateSubtotal = () => {
    return cart.reduce((sum, product) => sum + product.price, 0);
  };

  const subTotal = calculateSubtotal();
  const moneyChange = money - subTotal;

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  };
  const getTime = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM'; 
    const hours12 = hours % 12 || 12;


    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours12}:${paddedMinutes} ${amOrPm}`;
};




  const handleInputChange = (event) => {
    setMoney(parseFloat(event.target.value) || 0);
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 h-full w-full">
      <h1>Cart</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2  p-2">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center flex-col ">
            <span className="text-[10px] sm:my-0">{product.name}</span>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-18 w-22 xl:h-48 sm:h-48 md:h-48"
            />

            <h1 className="text-[10px]">${product.price.toFixed(2)}</h1>
            <p className="text-[10px]">Quantity: {product.quantity}</p>
            <button onClick={() => removeCart(product.id)}>Remove</button>
          </div>
        ))}
      </div>{" "}
      <button onClick={() => clearCart([])}>Clear Cart</button>
      {cart.length > 0 && (
        <div className="bg-gray-500 p-5 rounded-lg flex justify-center items-center">
          <div className="flex flex-col w-full h-screen  text-[21px] p-4" ref={contentToPrint}>
            <h1 className="mx-auto text-[29px]">Guest 1</h1>
            <div className="mx-auto">
              <h1>Pares Retiro</h1>
              <p>Tuburan ,Ligao City</p>
              <div className="flex justify-between"><h1>{getDate()}</h1>
              <h1>{getTime()}</h1></div>
              
              {cart.map((product) => (
                <div key={product.id}>
                  <p>
                    {product.name}: ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
              <p>Subtotal: ${subTotal.toFixed(2)}</p>
              <input
                type="number"
                placeholder="Amount"
                onChange={handleInputChange}
                value={money}
                className="p-[2px] rounded-lg"
              />

              <p>Change: ${moneyChange ? moneyChange.toFixed(2) : "0.00"}</p>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
