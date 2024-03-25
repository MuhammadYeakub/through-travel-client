import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Dummy information
  const address = "123 Main Street, Cherry Hill, NJ 08003";
  const country = "Russia";
  const quotes = [
    "Live, laugh, love.",
    "Be yourself; everyone else is already taken.",
  ];
  const blogPosts = [
    {
      title: "My Journey in React",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "Travel Adventures",
      date: "2022-02-15",
      content: "Consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-[#57baea]">
      <div className="rounded-lg shadow-xl bg-[#ffffff] text-[#565967] overflow-hidden max-w-4xl w-full">
        {/* Profile Header */}
        <div className="text-center p-8 border-b border-gray-400">
          <h1 className="text-3xl font-bold">My Account</h1>
        </div>

        {/* Profile Content */}
        <div className="flex">
          {/* Profile Image and Info */}
          <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-600">
            <div className="w-28 h-28 sm:w-52 sm:h-52 relative">
              <img
                className="rounded-full border-4 border-white shadow-lg"
                src={user?.photoURL}
                alt="avatar"
                // style={{ position: "relative", zIndex: 10 }}
              />
            </div>
            <h3 className="text-xl font-semibold">{user?.displayName}</h3>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>

          {/* Additional Info */}
          <div className="w-1/2 p-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400">Address</h4>
              <p className="text-lg">{address}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-400">Country</h4>
              <p className="text-lg">{country}</p>
            </div>

            {/* Quotes */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400">
                Favorite Quotes
              </h4>
              {quotes.map((quote, index) => (
                <p key={index} className="text-md mt-2 italic">
                  "{quote}"
                </p>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400">
                Latest Blog Posts
              </h4>
              {blogPosts.map((post, index) => (
                <div key={index} className="mt-4">
                  <h5 className="text-lg font-medium">{post.title}</h5>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-md mt-1">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
