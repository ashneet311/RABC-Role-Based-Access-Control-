import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserManagement from "./UserManagement";
import Dashboard from "./Dashboard";
import Viewuser from "../small-components/Viewuser";
import AddEdit from "../small-components/AddEdit";
import AssignRole from "../small-components/AssignRole";
import Manage from "../small-components/Manage";
import { MdDashboardCustomize } from "react-icons/md";
import DefineRole from "../small-components/DefineRole";
import EditRoles from "../small-components/EditRoles";
import Include from "../small-components/Include";
import AssignPermission from "../small-components/AssignPermission";
import ModifyRoles from "../small-components/ModifyRoles";
import DisplayPermission from "../small-components/DisplayPermission";

const Admin = () => {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open,setOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className={`w-[18%] bg-[#F9F9F9] text-black flex-shrink-0 p-4 transition-all duration-500 `}>
            <div className=" text-xl flex items-center justify-between mb-4">
              MAIN MENU 
             
            </div>
            <nav className="flex flex-col space-y-2">
              
              <div
                className={` py-2 px-2 rounded-full   transition-all duration-100 `}
              >
                <div
                  onClick={() => setopen1(!open1)}
                  className="cursor-pointer "
                >
                  <div className="flex justify-between gap-4 items-center">
                    <img src="management.png" alt="Study Logo" />
                    <h3 className="text-base  font-semibold text-gray-800 hover:text-[#323290]">
                      User Management
                    </h3>
                    <img
                      src="arrowd.png"
                      alt=""
                      className={`flex items-center ml-auto transition-transform duration-300 ${
                        open1 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {/* Transition for dropdown content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 rounded-lg mt-6  ${
                      open1 ? "max-h-screen opacity-100" : " max-h-0"
                    }`}
                  >
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      View User
                    </NavLink>
                    <NavLink
                      to="/Addedit"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      Add User
                    </NavLink>
                    <NavLink
                      to="/Assignroles"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      Assign Roles to user
                    </NavLink>
                    
                  </div>
                </div>
              </div>
              <div
                className={` py-2 px-2 rounded-full transition-all duration-100 `}
              >
                <div
                  onClick={() => setopen2(!open2)}
                  className="cursor-pointer "
                >
                  <div className="flex justify-between gap-4 items-center">
                    <img src="role.png" alt="Study Logo" />
                    <h3 className="text-base  font-semibold text-gray-800 hover:text-[#323290]">
                      Role Management
                    </h3>
                    <img
                      src="arrowd.png"
                      alt=""
                      className={`flex items-center ml-auto transition-transform duration-300 ${
                        open2 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {/* Transition for dropdown content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 rounded-lg mt-6  ${
                      open2 ? "max-h-screen opacity-100" : " max-h-0"
                    }`}
                  >
                    <NavLink
                      to="/Editroles"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                     Add Roles
                    </NavLink>
                    <NavLink
                      to="/Defineroles"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      Define Roles
                    </NavLink>
                    
                   
                   
                  </div>
                </div>
              </div>
              <div
                className={` py-2 px-2 rounded-full transition-all duration-100 `}
              >
                <div
                  onClick={() => setopen3(!open3)}
                  className="cursor-pointer "
                >
                  <div className="flex justify-between gap-3 items-center">
                    <img src="permission.png" alt="Study Logo" />
                    <h3 className="text-base  tracking-tighter font-semibold text-[#1E1E1E] hover:text-[#323290]">
                    Permission Management
                    </h3>
                    <img
                      src="arrowd.png"
                      alt=""
                      className={`flex items-center ml-auto transition-transform duration-300 ${
                        open3 ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {/* Transition for dropdown content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 rounded-lg mt-6  ${
                      open3 ? "max-h-screen opacity-100" : " max-h-0"
                    }`}
                  >
                    <NavLink
                      to="/AssignPermission"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      Assign Permissions to Roles
                    </NavLink>
                    <NavLink
                      to="/Modifyrole"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      {" "}
                      Modify Role Permissions
                    </NavLink>
                    <NavLink
                      to="/DisplayPer"
                      className={({ isActive }) =>
                        `px-4 py-2  tracking-tighter rounded-full flex gap-2 items-center   ${
                          isActive ? "bg-[#028391] text-white" : ""
                        }`
                      }
                    >
                      Display Permissions Clearly
                    </NavLink>
                   
                  </div>
                </div>
              </div>
            </nav>
          </aside>

          {/* Main Content */}

          {/* Header */}
          <div className=" flex-auto bg-gray-100">
            {/* Content */}
            <main className=" p-6">
              <Routes>
                
                <Route path="/" element={<Viewuser />} />
                <Route path="/Addedit" element={<AddEdit />} />
                <Route path="/Assignroles" element={<AssignRole />} />
                <Route path="/Defineroles" element={<DefineRole/>} />
                <Route path="/Editroles" element={<EditRoles/>} />
                <Route path="/Include" element={<Include/>} />
                <Route path="/AssignPermission" element={<AssignPermission/>} />
                <Route path="/Modifyrole" element={<ModifyRoles/>} />
                <Route path="/DisplayPer" element={<DisplayPermission/>} />
                {/* Add additional routes as needed */}
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Admin;
