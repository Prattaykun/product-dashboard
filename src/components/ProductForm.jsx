import { useState } from "react";

const sampleProducts = [
  {
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    stock: 25,
    image:
      '/headphones.jpeg',
    description: "Noise cancelling over-ear wireless headphones"
  },
  {
    name: "Running Shoes",
    price: 4499,
    category: "Footwear",
    stock: 12,
    image:
      '/shoes.jpeg',
    description: "Lightweight running shoes for daily workouts"
  },
  {
    name: "Smart Watch",
    price: 5999,
    category: "Accessories",
    stock: 18,
    image:
      '/watch.jpeg',
    description: "Fitness tracking smart watch with heart rate monitor"
  }
];

export default function ProductForm({ setProducts }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });

  const autofillProduct = (product) => {
    setForm({ ...product });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

 const submit = (e) => {
  e.preventDefault();

  if (!form.name || !form.price || !form.category) {
    alert("Name, Price & Category are required");
    return;
  }

  const newProduct = {
    ...form,
    id: crypto.randomUUID(), // unique ID
  };

  setProducts(prev => [...prev, newProduct]);

  setForm({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });
};

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      {/*  Quick Fill Examples */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Quick Add Examples</p>
        <div className="flex flex-wrap gap-3">
          {sampleProducts.map((p, i) => (
            <button
              key={i}
              onClick={() => autofillProduct(p)}
              type="button"
              className="border px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input"
            placeholder="Product Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="input"
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="input"
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />

          <input
            className="input"
            placeholder="Stock"
            value={form.stock}
            onChange={e => setForm({ ...form, stock: e.target.value })}
          />

          <input type="file" accept="image/*" onChange={handleImage} />

          <textarea
            className="input col-span-2"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}
