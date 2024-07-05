import ParesRetiros from "../assets/paresRetiro.jpg";

const ParesRetiro = () => {
  return (
    <div className="p-5 md:p-20 w-full h-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="text-xs w-full md:w-[550px] mb-4 md:mb-0 p-4">
          <h1 className="my-4 text-lg md:text-xl">The Pares Retiro</h1>
          <p className="text-sm md:text-base">
            The taste buds of our patrons and leaving them craving more. Your
            culinary prowess transforms mere ingredients into culinary works of
            art, earning our restaurant a reputation for excellence. Thank you
            for bringing your talent and expertise to our kitchen, for elevating
            our menu, and for making our pares the highlight of every dining
            experience.
          </p>
        </div>

        <div className="flex justify-center w-full md:w-auto">
          <img
            src={ParesRetiros}
            alt="Pares Retiro"
            className="h-72 xl:w-[400px] md:w-auto md:h-62 p-2 md:p-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ParesRetiro;
