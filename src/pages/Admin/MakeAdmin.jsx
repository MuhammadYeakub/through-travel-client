import React, { useState } from "react";
import toast from "react-hot-toast";
import { makeUserAdmin, removeAdminRole } from "../../api/auth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleMakeAdmin = () => {
    makeUserAdmin(email)
      .then(() => {
        toast.success("User is now an admin");
        // Handle success or reset the input field
        setEmail("");
      })
      .catch((error) => {
        toast.error("Error making user an admin");
        console.error("Error making user an admin:", error);
      });
  };

  const handleRemoveAdmin = () => {
    removeAdminRole(email)
      .then(() => {
        toast.success("Admin role removed from the user");
        // Handle success or reset the input field
        setEmail("");
      })
      .catch((error) => {
        toast.error("Error removing admin role");
        console.error("Error removing admin role:", error);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Make Admin
      </h1>
      <div className="p-20">
        <h1 className="text-xl font-medium text-[#0C0C0C] py-2">User Email</h1>
        <input
          type="text"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-[#70c8f4] p-2 rounded-md w-1/2"
        />
        <div className="flex mt-5">
          <button
            onClick={handleMakeAdmin}
            className="bg-[#57baea] text-white px-5 py-2 mr-2 rounded-md"
          >
            Make Admin
          </button>
          <button
            onClick={handleRemoveAdmin}
            className="bg-[#57baea] text-white px-5 py-2 rounded-md"
          >
            Remove Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
