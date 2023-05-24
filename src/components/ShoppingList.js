import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function onItemFormSubmit(newItem) {
    setItems(preItems => [...preItems, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const searchItemsToDisplay = items.filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return true
    }
  });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  let itemsToFilter = search ? searchItemsToDisplay : itemsToDisplay;

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleChange} search={search}/>
      <ul className="Items">
        {itemsToFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
