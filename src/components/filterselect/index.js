/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function FilterSelect({ data }) {
  const [selected, setSelected] = useState(null);

  const handleClick2 = (index) => {
    setSelected(index);
  };
  return (
    <div>
      {data.map((item, i) => (
        <button
          type="button"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={`option-button ${selected === i ? "clicked" : ""}`}
          onClick={() => handleClick2(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default FilterSelect;
