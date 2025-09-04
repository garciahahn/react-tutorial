// Pass object with two properties: { items: [], heading: string }
// To pass objects like this we use one of the typescript featues called "interface"
// With this we defined the _shape_ or interface of an object
interface ListGroupProps {
  items: string[];
  heading: string;
  // We need a function to propagate information upwards
  // (item: string) => void
  onSelectItem: (item: string) => void; // Similar to "onClick"
}

import { useState } from "react";
// It is possible to destructure inputs of a function in this manner
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
