import React, { useState, useEffect } from "react";

function Manage({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    RoleName: "",
    description: "",
    permission: "",
    
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert("Edited Succesfully")
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {user ? "Edit User" : "Add User"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role name:
            </label>
           <select name="RoleName" id="" value={formData.RoleName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
            <option value="Admin">Admin</option>
            <option value="Director">Director</option>
            <option value="VP">VP</option>
            <option value="Principal">Principal</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
           </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Permission:</label>
            <select
              name="permission"
              value={formData.permission}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            >
              <option value="Read">Read</option>
              <option value="write">Write</option>
              <option value="Delete">Delete</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {user ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Manage;