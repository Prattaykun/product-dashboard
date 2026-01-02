export default function Pagination({ total, perPage, current, setCurrent }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i + 1)}
          className={`px-3 py-1 border ${
            current === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
