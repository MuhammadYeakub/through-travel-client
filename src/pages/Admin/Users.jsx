import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUsers, removeUser } from "../../api/auth";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = async (email) => {
    try {
      const result = await removeUser(email);
      console.log(result); // Log the result of the removal operation
      // Update the users list after removal
      toast.success("User removed successfully");
      const updatedUsers = users.filter((user) => user.email !== email);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Users list
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-20">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white border rounded-md shadow-md p-4"
          >
            {user.img && (
              <img
                src={user.img}
                alt={`${user.name}'s Profile`}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
            )}
            <h2 className="text-xl font-medium mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600 mb-2">Status: {user.role}</p>
            {user.role === "user" && (
              <button
                className="bg-sky-400 text-white rounded px-2 py-1"
                onClick={() => handleRemoveUser(user.email)}
              >
                Remove user
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
