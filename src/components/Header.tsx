import React from "react";

export default function Header({
  filter,
  filters,
  onChangeFilter,
}: {
  filter: string;
  filters: string[];
  onChangeFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <header className="flex h-1/6 w-full items-center justify-end border-b-2 border-solid border-b-yellow-200 px-6 py-4">
      <ul className="flex">
        {filters.map((value, idx) => (
          <li className="ml-4 text-3xl font-bold text-yellow-400" key={idx}>
            <button
              className="m-1 select-text text-2xl font-bold opacity-50  hover:opacity-100"
              type="button"
              onClick={() => {
                onChangeFilter(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
