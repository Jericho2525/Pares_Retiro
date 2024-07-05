import FoodMenu from "../assets/FoodMenu"
import {useStore} from "../store/Store"

const Menu = () => {
  const addToCart = useStore((state) => state.addToCart)
  console.log(addToCart)
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1  gap-4 text-[10px] h-full mt-2 p-4  ">
   {FoodMenu.map((product) =>(
    <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden border-orange-200 border-2 p-2 my-2" key={product.id}>
    <h1>{product.name}</h1>
    <img src={product.imageUrl} className="h-[100px] w-[100px]"/>
    <p className="w-24 my-2">{product.description}</p>
    <button onClick={() => addToCart(product)} className="p-2 hover:bg-blue-600 ease-in transition hover:text-white rounded-3xl bg-orange-400">Add to Cart</button>
    </div>
    
   ))}
    </div>
  );
};

export default Menu;
