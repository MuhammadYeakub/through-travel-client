// import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";
const Search = () => {
  const [cart] = useCart();
  return (
    <div className="w-full md:w-auto py-2 cursor-pointer hidden md:block">
      <div className="flex flex-row items-center justify-between">
        <NavLink
          to="/"
          exact
          className="text-[#474747] text-semibold pr-4 active-link"
          activeClassName="active-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-[#474747] text-semibold pr-4 active-link"
          activeClassName="active-link"
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard/my-cart"
          className="text-[#474747] text-semibold pr-4 active-link"
          activeClassName="active-link"
        >
          <button>
            <FaOpencart className="inline-block mr-2" />
            <small className="bg-[#57baea] rounded-full text-white px-1 ">
              +{cart?.length || 0}
            </small>
          </button>
        </NavLink>
        <NavLink
          to="/contact"
          className="text-[#474747] text-semibold active-link"
          activeClassName="active-link"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Search;
