import React, { useState } from "react";

const initialRoles = [
  {
    name: "Admin",
    permissions: {
      Users: { Read: true, Write: true, Delete: true },
      Roles: { Read: true, Write: true, Delete: false },
      Settings: { Read: true, Write: false, Delete: false },
    },
  },
  {
    name: "Director",
    permissions: {
      Users: { Read: true, Write: true, Delete: false },
      Roles: { Read: true, Write: false, Delete: false },
      Settings: { Read: true, Write: true, Delete: false },
    },
  },
  {
    name: "Principal",
    permissions: {
      Users: { Read: true, Write: true, Delete: false },
      Roles: { Read: true, Write: false, Delete: false },
      Settings: { Read: true, Write: true, Delete: false },
    },
  },
  {
    name: "Teacher",
    permissions: {
      Users: { Read: true, Write: true, Delete: false },
      Roles: { Read: true, Write: false, Delete: false },
      Settings: { Read: true, Write: true, Delete: false },
    },
  },
  {
    name: "VP",
    permissions: {
      Users: { Read: true, Write: true, Delete: false },
      Roles: { Read: true, Write: false, Delete: false },
      Settings: { Read: true, Write: true, Delete: false },
    },
  },
  {
    name: "Student",
    permissions: {
      Users: { Read: true, Write: true, Delete: false },
      Roles: { Read: true, Write: false, Delete: false },
      Settings: { Read: true, Write: true, Delete: false },
    },
  },
];

const resources = ["Users", "Roles", "Settings"];
const permissions = ["Read", "Write", "Delete"];

const ModifyRoles = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(null);
  const [newRole, setNewRole] = useState("");

  const togglePermission = (roleIndex, resource, permission) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].permissions[resource][permission] =
      !updatedRoles[roleIndex].permissions[resource][permission];
    setRoles(updatedRoles);
  };

  const handleRoleNameChange = (roleIndex, newName) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].name = newName;
    setRoles(updatedRoles);
  };
  function handlesave(){
    alert("permissin saved succesfully")
  }
  const addNewRole = () => {
    if (newRole.trim()) {
      setRoles([
        ...roles,
        {
          name: newRole,
          permissions: resources.reduce((acc, resource) => {
            acc[resource] = permissions.reduce((permAcc, perm) => {
              permAcc[perm] = false;
              return permAcc;
            }, {});
            return acc;
          }, {}),
        },
      ]);
      setNewRole("");
    }
  };

  const deleteRole = (roleIndex) => {
    const updatedRoles = roles.filter((_, index) => index !== roleIndex);
    setRoles(updatedRoles);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Modify Roles</h1>

      {/* Roles List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Existing Roles</h2>
        {roles.map((role, index) => (
          <div
            key={index}
            className={`border p-4 mb-4 rounded ${
              selectedRoleIndex === index ? "bg-gray-200" : "bg-white"
            }`}
          >
            <input
              type="text"
              value={role.name}
              onChange={(e) => handleRoleNameChange(index, e.target.value)}
              className="text-lg font-medium mb-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            />
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Resources
                    </th>
                    {permissions.map((permission) => (
                      <th
                        key={permission}
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                      >
                        {permission}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource) => (
                    <tr key={resource} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">{resource}</td>
                      {permissions.map((permission) => (
                        <td
                          key={permission}
                          className="px-6 py-4 text-center cursor-pointer"
                        >
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${
                              role.permissions[resource][permission]
                                ? "bg-green-500 text-white"
                                : "bg-gray-300"
                            }`}
                            onClick={() =>
                              togglePermission(index, resource, permission)
                            }
                          >
                            {role.permissions[resource][permission] ? "✓" : ""}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right flex gap-4">
              <button onClick={()=>handlesave()} className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Save Permissions</button>
              <button
                onClick={() => deleteRole(index)}
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
              >
                Delete Role
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Role */}
      
    </div>
  );
};

export default ModifyRoles;
