import React from "react";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth); // useSelector -> React-Redux library that allows you to extract data from the Redux store state
  // getting the user here
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];
  //if the user is the Admin he should see all the links but not the worker
  //  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  // if he a normal user the he will be able to see only these
  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);
  //   //{ due to slice
  //   //   label: "Team",
  //   //   link: "team",
  //   //   icon: <FaUsers />,
  //   // },
  //   // {
  //   //   label: "Trash",
  //   //   link: "trashed",
  //   //   icon: <FaTrashAlt />,
  //   // },

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false)); // if the side bar is already open the it will close it
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}// on mobile devices
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : "" // we are splitting from the main domain
        )}
      >
        {el.icon}
        <span className="hover:text-[#2564ed]">{el.label}</span>
      </Link>
    );
  };
  return (
    <div className="w-full  h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div className="">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

//notes
//  const pathname = location.pathname.split("/")[1]

// The location.pathname property in JavaScript represents the path part of the current URL. For example, if the URL is https://example.com/products/123, location.pathname would be /products/123.

// The .split("/") method is used to split the pathname into an array of substrings based on the / delimiter. For example, /products/123 would be split into ["", "products", "123"].

// Finally, [1] is used to access the second element of the resulting array, which in this case would be "products".

// So, const pathname = location.pathname.split("/")[1] extracts the second part of the pathname from the URL. If the URL is https://example.com/products/123, pathname would be "products".
