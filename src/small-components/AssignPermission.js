import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const resources = ["Admin", "principal", "Director","VP","teacher","Student"];
const permissions = ["Read", "Write", "Delete"];

const AssignPermission = () => {
  const [gridData, setGridData] = useState(
    resources.reduce((acc, resource) => {
      acc[resource] = permissions.reduce((permAcc, perm) => {
        permAcc[perm] = false; // Initially all permissions are inactive
        return permAcc;
      }, {});
      return acc;
    }, {})
  );

  const navigate = useNavigate();

  const togglePermission = (resource, permission) => {
    setGridData((prevGrid) => ({
      ...prevGrid,
      [resource]: {
        ...prevGrid[resource],
        [permission]: !prevGrid[resource][permission],
      },
    }));
  };

  const getIndicatorClass = (isActive) => {
    if (isActive) return "bg-green-500 text-white";
    return "bg-gray-300";
  };

  const handleViewPermissions = () => {
    navigate("/DisplayPer", { state: { gridData } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Assign Permissions</h1>

      {/* Interactive Grid */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
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
              <tr key={resource} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {resource}
                </td>
                {permissions.map((permission) => (
                  <td
                    key={permission}
                    className="px-6 py-4 text-center cursor-pointer"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${getIndicatorClass(
                        gridData[resource][permission]
                      )}`}
                      onClick={() => togglePermission(resource, permission)}
                    >
                      {gridData[resource][permission] ? "✓" : ""}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={() => alert(JSON.stringify(gridData, null, 2))}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          Save Permissions
        </button>
        <button
          onClick={handleViewPermissions}
          className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
        >
          View Permissions
        </button>
      </div>
    </div>
  );
};

export default AssignPermission;
