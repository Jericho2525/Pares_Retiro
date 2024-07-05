import Tokwa1 from "../assets/Tokwat Baka 5 pax.webp";
import Pares from "../assets/Beff Pares.webp";
import Tapa from "../assets/Tapa1.webp";
import { Link } from "react-router-dom";

const MenuFood = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-500 justify-around p-10 mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
      <Link to="/menu" className="flex justify-center">
        <img
          src={Tokwa1}
          className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg transition duration-200 ease-in-out hover:filter hover:gray"
          alt="Tokwat Baka"
        />
      </Link>
      <Link to="/menu" className="flex justify-center">
        <img
          src={Pares}
          className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg transition duration-200 ease-in-out hover:filter hover:gray"
          alt="Beef Pares"
        />
      </Link>
      <Link to="/menu" className="flex justify-center">
        <img
          src={Tapa}
          className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg transition duration-200 ease-in-out hover:filter hover:gray"
          alt="Tapa"
        />
      </Link>
    </div>
  );
};

export default MenuFood;
