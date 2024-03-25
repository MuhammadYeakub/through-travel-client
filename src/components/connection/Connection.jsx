import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const Connection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b5girqt",
      "template_n9frmgm",
      form.current,
      "3hCvHi6zoKDmGvlxs"
    );
    toast.success("Message send successfully!");
    e.target.reset();
  };
  return (
    <div className="bg-neutral py-10">
      <div className="md:w-5/12 px-4 md:px-0  mx-auto ">
        <h1 className="text-center text-[34px] pt-5 font-bold text-gray-700">
          Put Your QNA Here
        </h1>

        <form ref={form} onSubmit={sendEmail} className=" mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="Fname"
              placeholder="First Name"
              className="input w-full p-5 rounded"
            />
            <input
              type="text"
              name="Lname"
              placeholder="Last Name"
              className="input w-full p-5 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full p-5 rounded"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input w-full p-5 rounded"
            />
          </div>

          <textarea
            name="message"
            className="textarea w-full pb-20 p-5 mt-6 rounded"
            placeholder="Your Message"
          ></textarea>
          <button className="block mx-auto my-6 rounded p-3 hover:bg-[#6dc8f6] transition duration-300 ease-in-out bg-[#57baea] text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connection;
