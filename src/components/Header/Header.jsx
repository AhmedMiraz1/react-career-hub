import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="font-bold text-[#7E90FE] text-xl"><NavLink to="/">Home</NavLink></li>
      <li className="font-bold text-[#7E90FE] text-xl"><NavLink to="/jobs">Jobs</NavLink></li>
      <li className="font-bold text-[#7E90FE] text-xl"><NavLink to="/Statistics">Statistics</NavLink></li>
      <li className="font-bold text-[#7E90FE] text-xl"><NavLink to="/Applied">Applied Jobs</NavLink></li>
      <li className="font-bold text-[#7E90FE] text-xl"><NavLink to="/Blog">Blog</NavLink></li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
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
            {links}
          </ul>
        </div>
        <Link to ='/' className="btn btn-ghost text-xl lg:text-3xl font-semibold lg:font-extrabold">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal gap-8 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="  rounded-xl px-3 py-2 lg:px-6 lg:py-4 text-white font-light lg:font-semibold text-base lg:text-2xl  bg-[#7E90FE]">Star Applying</a>
      </div>
    </div>
  );
};

export default Header;
