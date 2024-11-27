import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [form, setFormData]  = useState({
    category:"code",
    text:""
  })

  function handleDetailsChange(e) {
    
    console.log(e.target.value)
    setFormData((prev) => ({
      ...prev,
      text: e.target.value, 
    }));
  }

  // Handle change for 'category' select dropdown
  function handleCategoryChange(e) {
    setFormData((prev) => ({
      ...prev,
      category: e.target.value, 
    }));
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(form)
    console.log(form); 
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          <option>{categories[1]}</option>
          <option>{categories[2]}</option>
          <option>{categories[3]}</option>
          <option>{categories[4]}</option>
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
