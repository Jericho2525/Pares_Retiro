import Magz from "../assets/Magz (1).png";
import MenuFood from "./MenuFood";
import ParesRetiro from "./ParesRetiro";

function Home() {
  return (
    <div className="p-4 h-screen">
      <img src={Magz} className="w-full h-[550px] max-h-[290px] max-w-full" />
      <MenuFood />
      <ParesRetiro />
    </div>
  );
}

export default Home;
