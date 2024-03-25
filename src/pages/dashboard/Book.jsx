import emailjs from "@emailjs/browser";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../api/services";
import useBooked from "../../hooks/useBooked";
import { AuthContext } from "../../providers/AuthProvider";

const Book = () => {
  // Email.js
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5jlcyby",
      "template_wf7vxqg",
      form.current,
      "9rQkHmDlC06UCHQ6K"
    );
    toast.success("bKash Payment successful!");
    // e.target.reset();
  };

  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name, price, img, description } = services;
  const { user } = useContext(AuthContext);
  const [booked, refetch] = useBooked();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log("ID:", id);
    getService(id)
      .then((data) => {
        console.log("Service Data:", data);
        setServices(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToBook = (item) => {
    console.log("Item:", item);
    if (user && user.email) {
      const bookItem = {
        bookedItemId: id,
        name,
        price,
        img,
        description,
        email: user.email,
      };
      fetch(`${import.meta.env.VITE_API_URL}/booked`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            // toast.success("Booked Successfully");
            navigate("/dashboard/my-booking");
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Pay to Book
      </h1>
      <section>
        <div>
          <div>
            <h4 className="mx-[195px] text-lg font-thin text-[#6e6e6e] p-5">
              Pay With Your favourite Gateway System
            </h4>
            <img
              src="https://i.ibb.co/GJ1qhsR/05.png"
              alt=""
              className="w-20 h-20 mx-80"
            />
            <h4 className="mx-[270px] text-lg font-thin text-[#f86e9c] px-5 pb-2">
              +88013xxxx3823
            </h4>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="service_name"
              placeholder="Service Name"
              className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
              value={name}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
              value={user.displayName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-gray-300 p-2 rounded-md w-1/2 m-4"
              value={user.email}
            />
            <textarea
              name="message"
              className="textarea w-1/2 pb-0 p-5 m-4 rounded"
              placeholder="Bkash Transaction ID"
            ></textarea>
            <br />
            <span className="text-gray-400 text-sm m-4">
              Your Service Charge will be Tk- {price} ৳
            </span>
            <button className="bg-[#57baea] hover:bg-[#68c4f2] text-white p-2 rounded-md m-4">
              <span onClick={handleAddToBook}>Pay Now</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;
