import { useState }from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [category, setCategory] = useState('Produce')
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      'id': uuid(),
      'name': name,
      'category': category
    }
    onItemFormSubmit(newItem)
    setName('')
    setCategory('produce')
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
