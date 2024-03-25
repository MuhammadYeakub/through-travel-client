// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    img: user.photoURL,
    role: "user",
  };
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Get role of user
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  return user?.role;
};

// Make a user an admin
export const makeUserAdmin = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/admin/${email}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

// Remove admin role from a user
export const removeAdminRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/remove-admin/${email}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

// Fetch users from the database
export const getUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Remove a user from the database
export const removeUser = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error removing user:", error);
    throw error;
  }
};
