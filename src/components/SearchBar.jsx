import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      className="border p-2 w-full mb-4"
      placeholder="Search product..."
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
