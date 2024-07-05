import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex flex-col max-w-[500px] h-full p-8">
        <div className="flex flex-col items-center justify-center w-[200px]">
          <h1 className="text-blue-500">Get in Touch</h1>
          <p className="mx-auto">
            We’re here to help and answer any question you might have. We look
            forward to hearing from you
          </p>
        </div>


        <div className="mt-4 ">
          <FaRegAddressBook className=" bg-blue-500 w-8 h-8 text] rounded-full p-1"/>
          <h1 className="font-bold">Address</h1>
          <p className="text-[10px]">Purok 4 , Barangay Tuburan , Ligao City ,Albay</p>
        </div>

        <div>
          <FaPhone className=" bg-blue-500 w-8 h-8 text] rounded-full p-1" />
          <h1 className="font-bold">Phone</h1>
          <p className="text-[10px]">09152246544</p>
        </div>

        <div>
          <MdOutlineMailOutline className=" bg-blue-500 w-8 h-8 text] rounded-full p-1"/>
          <h1 className="font-bold">Email</h1>
          <p className="text-[10px]">RetiroPares@gmail.com</p>
        </div>
      </div>

      <div>
        <form className="flex-col flex bg-blue-400 p-10 rounded-lg">
          <h1>First Name</h1>
          <input type="text" className=" border-red-400 rounded-md border" />

          <h1>Last Name</h1>
          <input type="text" className=" border-red-400 rounded-md border"  />

          <h1>Email</h1>
          <input type="text" className=" border-red-400 rounded-md border" />

          <h1>Comment</h1>
          <textarea type="text" className=" border-red-400 rounded-md border max-w-[820px]" />
        <button className="hover:bg-green-400 mt-2 p-4 w-full">Submit</button>
          </form>
      </div>
    </div>
  );
};

export default ContactUs;
