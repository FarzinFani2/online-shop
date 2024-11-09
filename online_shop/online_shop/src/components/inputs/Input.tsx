import { Dispatch, SetStateAction } from "react";

export default function Input({
  categories,
  setSelectedCategories,
  selectedCategory,
  seachQuery,
  setSearchQuery,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategories: Dispatch<SetStateAction<string>>;
  seachQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 max-w-[1250px] w-[100%] mt-6 gap-5 px-4">
      <div className="flex items-center">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border ps-10 p-2 rounded-md w-[100%] border-gray-300 text-gray-900 focus:border-none focus:outline-gray-300"
          value={seachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <select
        onChange={(e) => setSelectedCategories(e.target.value)}
        className="bg-gray-50 border rounded-md w-[100%] md:w-[60%] border-gray-300 text-gray-900 focus:outline-gray-300"
      >
        {categories.map((c) => (
          <option value={c}> {c} </option>
        ))}
      </select>
    </div>
  );
}
