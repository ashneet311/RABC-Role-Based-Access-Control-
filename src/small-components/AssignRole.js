import React, { useState } from "react";

const AssignRole = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      roles: [ "Director"],
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      roles: ["Teacher"],
      status: "Inactive",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");

  const handleAssignRole = (userId) => {
    if (newRole.trim() === "") return;

    const updatedUsers = users.map((user) =>
      user.id === userId
        ? {
            ...user,
            roles: [...new Set([...user.roles, newRole])], // Avoid duplicate roles
          }
        : user
    );

    setUsers(updatedUsers);
    setNewRole("");
    setSelectedUser(null);
    alert(`Role "${newRole}" assigned successfully!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Assign Roles</h1>

      {/* User Table */}
      <div className="bg-white shadow rounded-md overflow-hidden">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-gray-700 font-semibold">Name</th>
              <th className="px-6 py-3 text-gray-700 font-semibold">Email</th>
              <th className="px-6 py-3 text-gray-700 font-semibold">Existing Roles</th>
              <th className="px-6 py-3 text-gray-700 font-semibold">Status</th>
              <th className="px-6 py-3 text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  {user.roles.join(", ") || "No roles assigned"}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="px-4 py-2 bg-[#028391] text-white rounded-md shadow hover:bg-blue-700"
                  >
                    Assign Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assign Role Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Assign Role to {selectedUser.name}
            </h3>
            <p className="mb-4 text-gray-600">
              Current Roles:{" "}
              <span className="font-semibold">
                {selectedUser.roles.join(", ") || "No roles assigned"}
              </span>
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Role:
              </label>
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Enter role"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAssignRole(selectedUser.id)}
                className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
              >
                Assign Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignRole;
