import React from "react";
import { useLocation } from "react-router-dom";

const DisplayPermissions = () => {
  const location = useLocation();
  const gridData = location.state?.gridData || {};

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">View Permissions <br /> (when you add any permission then display here , so fist add permission and see results here)</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Resources
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Active Permissions
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(gridData).map((resource) => {
              const activePermissions = Object.keys(gridData[resource]).filter(
                (perm) => gridData[resource][perm]
              );
              return (
                <tr key={resource} className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {resource}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {activePermissions.length > 0
                      ? activePermissions.join(", ")
                      : "No permissions assigned"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayPermissions;
