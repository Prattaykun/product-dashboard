import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 underline"
      >
         Back
      </button>

      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 shadow rounded">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-1">{product.category}</p>
          <p className="text-xl font-semibold mt-4">₹{product.price}</p>
          <p className="mt-3">{product.description}</p>
          <p className="mt-2 text-sm text-gray-600">
            Stock Available: {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
}
