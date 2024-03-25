import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
  // Modal for purchase
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f532pvz",
      "template_ulbkj0k",
      form.current,
      "Lz7zf6YVrNzxWVPHD"
    );
    toast.success("Your bKash Payment Successful!");
    // e.target.reset();
  };

  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [itemQuantities, setItemQuantities] = useState({});
  // const [count, setCount] = useState(1);

  const updateQuantity = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * (itemQuantities[item._id] || 1),
    0
  );

  const handleDelete = (item) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (confirmDelete) {
      fetch(`${import.meta.env.VITE_API_URL}/carts/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleted > 0) {
            refetch();
            toast.success("Product deleted successfully!");
            window.location.reload();
          }
        });

      setItemQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[item._id];
        return updatedQuantities;
      });
    }
  };

  const handlePurchase = () => {
    if (!user) {
      toast.error("Please log in to make a purchase.");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        items: cart.map((item) => ({
          productId: item._id,
          quantity: itemQuantities[item._id] || 1,
        })),
        totalAmount: totalAmount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Purchase successful!");
        // setCount(1); // Assuming setCount is defined somewhere
        refetch();
      })
      .catch((error) => {
        console.error("Error making purchase:", error);
        toast.error("Error making a purchase. Please try again.");
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        My Cart
      </h1>
      {cart?.length > 0 ? (
        <div className="flex flex-col gap-4 p-20">
          {cart?.map((item) => (
            <div
              key={item._id}
              className="flex flex-row items-center justify-between bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-row items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-28 h-20 bg-gray-200 rounded-lg"
                />
                <div>
                  <h1 className="text-lg font-semibold text-[#0C0C0C]">
                    {item.name}
                  </h1>
                  <p className="text-sm text-[#0C0C0C]">
                    Tk- {item.price.toLocaleString("id-ID")} ৳
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const newQuantity = itemQuantities[item._id]
                      ? itemQuantities[item._id] - 1
                      : 1;
                    updateQuantity(item._id, newQuantity);
                  }}
                  className="bg-[#57baea] text-white rounded-full px-2 py-1"
                >
                  -
                </button>
                <span className="text-[#0C0C0C]">
                  {itemQuantities[item._id] || 1}
                </span>
                <button
                  onClick={() => {
                    const newQuantity = (itemQuantities[item._id] || 1) + 1;
                    updateQuantity(item._id, newQuantity);
                  }}
                  className="bg-[#57baea] text-white rounded-full px-2 py-1"
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-[#57baea] text-white rounded-full px-2 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-transparent p-5 rounded-xl  w-1/3 mx-auto">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-lg font-semibold text-[#0C0C0C]">Total</h1>
              <h1 className="text-lg font-semibold text-[#0C0C0C]">
                Tk- {totalAmount.toLocaleString("id-ID")} ৳
              </h1>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
                // handlePurchase(); // You can choose to call handlePurchase here if needed
              }}
              className="bg-[#57baea] text-white rounded-full px-2 py-1 w-full hover:shadow-md transition duration-400"
            >
              Proceed to Checkout
            </button>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  border: "none",
                  padding: 0,
                },
              }}
            >
              {/* Your bKash payment modal content goes here */}
              <div className="bg-white p-8 rounded-sm">
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
                {/* Add your bKash payment form or content here */}
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border-1 border-gray-300 p-2 rounded-md w-1/2 m-4"
                    value={user.displayName}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-1 border-gray-300 p-2 rounded-md w-1/2 m-4"
                    value={user.email}
                  />
                  <textarea
                    name="message"
                    className="textarea w-1/2 pb-0 p-5 m-4 rounded"
                    placeholder="Bkash Transaction ID"
                    required
                  ></textarea>
                  <br />
                  <span className="text-gray-400 text-sm m-4">
                    Your Total Payable Amount Will be Tk-{" "}
                    {totalAmount.toLocaleString("id-ID")} ৳
                  </span>
                  <button className="bg-[#57baea] text-white rounded-full px-6 py-2 my-4 hover:shadow-md transition duration-400">
                    <span
                      onClick={() => {
                        handlePurchase();
                        setIsModalOpen(false);
                      }}
                    >
                      Pay with bKash
                    </span>
                  </button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <svg
            enable-background="new 0 0 100 100"
            height="100px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 100 100"
            width="100px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M50,47.807c-3.603,0-6.625-2.453-7.509-5.778c-13.41,0.208-25.268,1.006-27.205,2.414   c0.915,7.264,4.057,13.83,8.718,19.002c5.23,5.803,10.186,11.846,15.066,17.946L50,95.053l10.929-13.662   c4.885-6.107,9.852-12.152,15.083-17.965c4.65-5.167,7.785-11.724,8.7-18.975c-1.94-1.377-13.797-2.187-27.206-2.412   C56.619,45.359,53.599,47.807,50,47.807z M60.028,45.979c10.777,0.243,17.05,0.796,20.23,1.274   C76.975,61.081,64.508,71.141,50,71.141c-14.517,0-26.989-10.072-30.264-23.912c3.166-0.48,9.435-1.033,20.227-1.263   c2.06,3.482,5.845,5.731,10.037,5.731C54.184,51.696,57.966,49.453,60.028,45.979z" />
              <path d="M50,4.947c-19.33,0-35,15.67-35,35c0,0.289,0.015,0.574,0.022,0.861c0.127-0.51,1.542-0.951,3.879-1.323   C19.138,23.195,31.867,9.241,47.932,8.129C49.051,8.052,50,8.953,50,10.074c0,1.022-0.794,1.865-1.814,1.932   c-14.114,0.933-25.319,12.672-25.404,26.999c5.068-0.496,12.123-0.809,19.678-0.937c0.841-3.386,3.893-5.899,7.54-5.899   c3.643,0,6.692,2.508,7.537,5.889c14.427,0.224,27.05,1.133,27.441,2.748C84.985,40.519,85,40.235,85,39.947   C85,20.617,69.33,4.947,50,4.947z" />
            </g>
          </svg>
          <h1 className="text-lg font-semibold text-[#0C0C0C]">
            Your cart is empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyCart;
