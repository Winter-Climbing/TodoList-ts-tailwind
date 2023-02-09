import React from "react";

export default function Header({
  filters,
  onChangeFilter,
}: {
  filters: string[];
  onChangeFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <header>
      {filters.map((value, idx) => (
        <li key={idx}>
          <button
            type="button"
            onClick={() => {
              onChangeFilter(value);
            }}
          >
            {value}
          </button>
        </li>
      ))}
    </header>
  );
}
