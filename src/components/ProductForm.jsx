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
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Add Product</h2>

      {/*  Quick Fill Examples */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2 text-gray-700">Quick Add Examples</p>
        <div className="flex flex-wrap gap-2">
          {sampleProducts.map((p, i) => (
            <button
              key={i}
              onClick={() => autofillProduct(p)}
              type="button"
              className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Product Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="input w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="input w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />

          <input
            className="input w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Stock"
            value={form.stock}
            onChange={e => setForm({ ...form, stock: e.target.value })}
          />

          <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">Product Image</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label
                htmlFor="product-image"
                className="inline-flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition-colors w-full sm:w-auto text-center"
              >
                Choose Image
              </label>
              <input
                id="product-image"
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
              <span className="text-xs text-gray-500 truncate">
                {form.image ? "Image selected" : "JPG, PNG up to a few MB"}
              </span>
            </div>
          </div>

          <textarea
            className="input col-span-1 md:col-span-2 min-h-[100px] rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <button className="mt-2 w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
          Add Product
        </button>
      </form>
    </div>
  );
}
