import React, { useState } from 'react'
import UserFormModal from '../components/UserFormModal';

const initialUsers = [
  { id: 1, name: "Ashneet Kaur", email: "ashneetkaur0311@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Director", status: "Inactive" },
  { id: 3, name: "alex", email: "alex@example.com", role: "principal", status: "Active" },
  { id: 4, name: "robin", email: "robin@example.com", role: "VP", status: "Inactive" },
  { id: 5, name: "Anuraag", email: "anuraag@example.com", role: "VP", status: "Inactive" }
];
const Viewuser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    alert("Deleted succesfully")
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
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Email</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Role</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Status</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4 text-gray-600">{user.name}</td>
                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                <td className="py-3 px-4 text-gray-600">{user.role}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700 border border-green-500"
                        : "bg-red-100 text-red-700 border border-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-blue-700  bg-blue-200 px-2 rounded border border-blue-500 mr-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-700 bg-red-200  px-2 rounded border border-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <UserFormModal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}

export default Viewuser
