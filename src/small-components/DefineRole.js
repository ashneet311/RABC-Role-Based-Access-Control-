import React, { useState } from 'react'

import Manage from './Manage';

const initialUsers = [
  { id: 1, RoleName: "Director", description: "alice@example.com", permission: "read", users: "3", action: "Active" },
  { id: 2, RoleName: "Principal", description: "bob@example.com", permission: "write", users: "2", action: "Inactive" },
  { id: 3, RoleName: "Student", description: "alex@example.com", permission: "delete", users: "4", action: "Active" },
  { id: 4, RoleName: "VP", description: "robin@example.com", permission: "read", users: "5", action: "Inactive" }
];
const DefineRole = () => {

  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      // Update existing user
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      // Add new user
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-[#F2F2F2] ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User</h2>
      
      <div className="mt-6">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Role Name</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold"> Description</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Permissions Summary</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Number of Users</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Actions</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4 text-gray-600">{user.RoleName}</td>
                <td className="py-3 px-4 text-gray-600">{user.description}</td>
                <td className="py-3 px-4 text-gray-600">{user.permission}</td>
                <td className="py-3 px-4 text-gray-600">{user.users}</td>
                
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.action === "Active"
                        ? "bg-green-100 text-green-700 border border-green-500"
                        : "bg-red-100 text-red-700 border border-red-500"
                    }`}
                  >
                    {user.action}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-blue-700  bg-blue-200 px-2 rounded border border-blue-500 mr-5"
                  >
                    Edit
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Manage
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}

export default DefineRole
