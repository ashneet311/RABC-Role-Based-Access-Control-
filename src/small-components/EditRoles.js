import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function EditRole() {
  
  const [roleData, setRoleData] = useState({
    name: '',
    description: '',
    permissions: {},
    users: [],
  });

  const [roles, setRoles] = useState([]);

  const resources = ['Users', 'Settings', 'Reports'];
  const actions = ['Read', 'Write', 'Delete'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoleData({ ...roleData, [name]: value });
  };

  const handlePermissionChange = (resource, action, value) => {
    setRoleData((prev) => {
      const newPermissions = { ...prev.permissions };
      if (!newPermissions[resource]) {
        newPermissions[resource] = {};
      }
      newPermissions[resource][action] = value;
      return { ...prev, permissions: newPermissions };
    });
  };

  const handleSave = () => {
    const newRole = { ...roleData };
    setRoles([...roles, newRole]);
    setRoleData({ name: '', description: '', permissions: {}, users: [] });
   alert("Role Created succesfully")
    // Navigate to '/roles' page with 'roles' data
    
    
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create/Edit Role</h2>

      <div className="bg-white p-6 rounded shadow-md">
        {/* Role Name and Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Role Name:</label>
          <input
            type="text"
            name="name"
            value={roleData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter role name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={roleData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter role description"
          ></textarea>
        </div>

        {/* Permission Matrix */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Permissions:</h3>
          <div className="overflow-auto">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Resources</th>
                  {actions.map((action) => (
                    <th
                      key={action}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      {action}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource}>
                    <td className="border border-gray-300 px-4 py-2">{resource}</td>
                    {actions.map((action) => (
                      <td
                        key={action}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        <input
                          type="checkbox"
                          checked={roleData.permissions[resource]?.[action] || false}
                          onChange={(e) =>
                            handlePermissionChange(resource, action, e.target.checked)
                          }
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-time Preview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Role Summary:</h3>
          <div className="bg-gray-50 p-4 rounded-md shadow-inner">
            <p className="mb-2">
              <strong>Role Name:</strong> {roleData.name || "N/A"}
            </p>
            <p className="mb-4">
              <strong>Description:</strong> {roleData.description || "N/A"}
            </p>
            <div>
              <strong>Permissions:</strong>
              <ul className="mt-2 list-disc pl-6">
                {Object.entries(roleData.permissions).map(([resource, actions]) => (
                  <li key={resource}>
                    <strong>{resource}:</strong>{' '}
                    {Object.entries(actions)
                      .filter(([, value]) => value)
                      .map(([action]) => action)
                      .join(', ') || 'None'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Role
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRole;