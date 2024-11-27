import React, { useState } from "react";

function CategoryFilter({categories, filterTasks}) {
  const [selected,setSelected] = useState(null)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{
        return(
          <button className={selected==category?"selected":""} key={category}  onClick={()=>{
            filterTasks(category)
            setSelected(category)
          }}>{category}</button>
        )
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
