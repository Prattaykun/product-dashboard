import { useNavigate } from "react-router-dom";

export default function ProductGrid({ products }) {
  const navigate = useNavigate();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div
          key={p.id}
          onClick={() => navigate(`/product/${p.id}`)}
          className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-48 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-500">{p.category}</p>
            <p className="font-bold mt-1">₹{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
