import React, { useState, useEffect } from "react";

function AddEdit({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
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

  const handleSubmit = () => {
    
    onSave(alert("Add succesfully"));
  };

  return (
    <div className=" flex items-center justify-center p-6 ">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h3 className="text-xl text-center font-bold text-gray-800 mb-4">
          ADD USER
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" caret-red-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#028391] focus:border-[#028391]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className=" caret-red-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#028391] focus:border-[#028391]"
            />
          </div>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className=" caret-red-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#028391] focus:border-[#028391]"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4 py-2 bg-[#028391] text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#028391]"
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

export default AddEdit;
