import React, { useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user.displayName,
    img: user.photoURL,
    designation: "",
    company: "",
    description: "",
  });
  const formRef = useRef(null);
  const handleAddToReview = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        toast.success("Review submitted successfully");
        // Reset the form or perform any other actions upon successful submission
        formRef.current.reset();
      } else {
        // Handle response with non-200 status (e.g., 404, 500, etc.)
        toast.error("Failed to submit the review");
      }
    } catch (error) {
      // Handle fetch request errors
      console.error("Error submitting review:", error);
      toast.error("Failed to submit the review");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Give Review
      </h1>

      <section>
        <form ref={formRef} className="p-10" onSubmit={handleAddToReview}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-[#0C0C0C] font-medium">Name</label>
              <input
                className="border-2 border-[#8fc5e0] rounded-md w-full p-2"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-[#0C0C0C] font-medium">Image</label>
              <input
                className="border-2 border-[#8fc5e0] rounded-md w-full p-2"
                type="text"
                placeholder="Your Image"
                name="img"
                value={formData.img}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-[#0C0C0C] font-medium">Designation</label>
              <input
                className="border-2 border-[#8fc5e0] rounded-md w-full p-2"
                type="text"
                placeholder="Company Designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-[#0C0C0C] font-medium">Company</label>
              <input
                className="border-2 border-[#8fc5e0] rounded-md w-full p-2"
                type="text"
                placeholder="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="text-[#0C0C0C] font-medium">Description</label>
            <textarea
              className="border-2 border-[#8fc5e0] rounded-md w-full p-2"
              name="description"
              cols="30"
              rows="10"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mt-5">
            <button className="bg-[#57baea] text-white rounded-md px-5 py-2">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Review;
