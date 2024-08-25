import React from "react";
import Widget from "./Widget";

const Category = ({ category, addWidget, removeWidget }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="category-widgets">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <button
          className="add-widget-btn"
          onClick={() => addWidget(category.id)}
        >
          + Add Widget
        </button>
      </div>
    </div>
  );
};

export default Category;
