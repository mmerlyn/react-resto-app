import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMenuItem, deleteMenuItem, updateMenuItem } from '../redux/menuSlice';
import toast from 'react-hot-toast';

export default function AdminPage() {
  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menu.items);

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.price || !form.description || !form.image) {
      toast.error('Please fill in all fields');
      return;
    }

    const newItem = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price)
    };

    dispatch(addMenuItem(newItem));
    toast.success(`${form.name} added to menu!`);

    setForm({ name: '', price: '', description: '', image: '' });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateMenuItem({ ...editForm, price: parseFloat(editForm.price) }));
    toast.success('Dish updated!');
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteMenuItem(id));
    toast.success('Dish removed from menu');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel – Manage Menu</h1>

      {/* Form */}
      <div className="space-y-2 mb-6">
        <input
          className="w-full p-2 border rounded"
          placeholder="Dish Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <button
          onClick={handleAdd}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Dish
        </button>
      </div>

      {/* Menu List */}
      <ul className="space-y-4">
        {menuItems.map(item => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row justify-between gap-4 p-4 border rounded shadow"
          >
            {editingId === item.id ? (
              <>
                <input
                  className="p-1 border rounded"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <input
                  className="p-1 border rounded"
                  name="price"
                  type="number"
                  value={editForm.price}
                  onChange={handleEditChange}
                />
                <input
                  className="p-1 border rounded"
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                />
                <input
                  className="p-1 border rounded"
                  name="image"
                  value={editForm.image}
                  onChange={handleEditChange}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
