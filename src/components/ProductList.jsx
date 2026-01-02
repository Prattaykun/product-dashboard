import { useNavigate } from "react-router-dom";


export default function ProductList({ products, view }) {
  const navigate = useNavigate();
    // LIST VIEW
  if (view === "list") {
    return (
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr 
              onClick={() => navigate(`/product/${p.id}`)}
              key={p.id} className="border-t hover:bg-gray-50 cursor-pointer">
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">₹{p.price}</td>
                <td className="p-3">{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // GRID VIEW
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div
            onClick={() => navigate(`/product/${p.id}`)} 
          key={p.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-48 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-500 text-sm">{p.category}</p>
            <p className="mt-2 font-bold">₹{p.price}</p>
            <p className="text-sm text-gray-400">Stock: {p.stock}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
