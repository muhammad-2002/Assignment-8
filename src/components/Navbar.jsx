import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-book"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Pages-to-Read"
          className={({ isActive }) =>
            isActive
              ? "text-[#23be0a] font-bold text-sm border border-solid border-[#23be0a] px-3 py-2 rounded-md"
              : "font-bold text-sm"
          }
        >
          {" "}
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 font-work-sans fixed z-10 px-16 shadow-md mx-auto">
      <div className="navbar-start ">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div> */}
        <a className="cursor-pointer text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu-horizontal px-1 gap-6">{Links}</ul>
      </div>
      <div className="navbar-end gap-4 ">
        <a className="btn common-color text-white">Button</a>
        <a className="btn text-white bg-[#59C6D2]">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
