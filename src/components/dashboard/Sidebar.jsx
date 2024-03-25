import React, { useContext, useEffect, useState } from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { GrChapterAdd, GrServices, GrUserAdmin } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { TbShoppingCartHeart, TbUserHeart } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from "../shared/navbar/Logo";

import toast from "react-hot-toast";
import { AiOutlineBars } from "react-icons/ai";
import { getRole } from "../../api/auth";
const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut, user } = useContext(AuthContext);

  const [isActive, setActive] = useState("false");
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Fetch the user's role when the component mounts and whenever the user changes
    if (user) {
      getRole(user.email).then((userRole) => {
        setRole(userRole);
      });
    }
  }, [user]);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#ffff] text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-100"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#ffff] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <Logo />
            </div>

            {/* Set User Route */}
            <div>
              {role === "admin" ? (
                <div className="flex flex-col py-2 mt-14">
                  <NavLink
                    to={`/dashboard/order-list`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <BsClipboard2Data className="w-5 h-5 mr-4" />
                    <span className="font-medium">Order List</span>
                  </NavLink>
                  <NavLink
                    to={`/dashboard/add-service`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <GrChapterAdd className="w-5 h-5 mr-4" />
                    <span className="font-medium">Add Service</span>
                  </NavLink>
                  <NavLink
                    to={`/dashboard/users-list`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <CgUserList className="w-6 h-6 mr-4" />
                    <span className="font-medium">Users List</span>
                  </NavLink>
                  <NavLink
                    to={`/dashboard/make-admin`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <GrUserAdmin className="w-5 h-5 mr-4" />
                    <span className="font-medium">Make Admin</span>
                  </NavLink>
                  <NavLink
                    to={`/dashboard/manage-service`}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <GrServices className="w-5 h-5 mr-4" />
                    <span className="font-medium">Manage Service</span>
                  </NavLink>
                </div>
              ) : (
                <div className="flex flex-col py-2 mt-14">
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <TbShoppingCartHeart className="w-5 h-5 mr-4" />
                    <Link to="/">
                      <span
                        onMouseOver={() => {
                          toast("Explore Our Services to Book!");
                        }}
                        className="font-medium"
                      >
                        Book
                      </span>
                    </Link>
                  </NavLink>
                  <NavLink
                    to="/dashboard/my-booking"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <BsClipboard2Data className="w-5 h-5 mr-4" />

                    <span className="font-medium">Booking list</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/my-cart"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <FaOpencart className="w-5 h-5 mr-4" />

                    <span className="font-medium">Product list</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2  transition-colors duration-300 transform hover:text-[#57baea] ${
                        isActive ? "text-[#57baea]" : "text-gray-600"
                      }`
                    }
                  >
                    <GoCodeReview className="w-5 h-5 mr-4" />

                    <span className="font-medium">Review</span>
                  </NavLink>
                </div>
              )}
            </div>
            {/* Set Admin Route */}
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform   hover:text-[#57baea] ${
                isActive ? "text-[#57baea]" : "text-gray-600"
              }`
            }
          >
            <TbUserHeart className="w-5 h-5 mr-4" />

            <span className="font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:text-[#57baea] transition-colors duration-300 transform"
          >
            <IoIosLogOut className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
