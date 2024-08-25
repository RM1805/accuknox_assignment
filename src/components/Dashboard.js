import React, { useState } from "react";
import Category from "./Category";
import dashboardData from "../data/dashboardData";
import {
  FaSyncAlt,
  FaEllipsisV,
  FaPlus,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";

const Dashboard = () => {
  const [categories, setCategories] = useState(dashboardData);
  const [showModal, setShowModal] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAddCategory = () => {
    if (newCategoryTitle) {
      const newCategory = {
        id: Date.now(),
        name: newCategoryTitle,
        widgets: [],
      };
      setCategories([...categories, newCategory]);
      setNewCategoryTitle("");
      setShowModal(false);
    }
  };

  const addWidget = (categoryId) => {
    const widgetTitle = prompt("Enter Widget Title:");
    const widgetDescription = prompt("Enter Widget Description:");
    if (widgetTitle && widgetDescription) {
      const newWidget = {
        id: Date.now(),
        title: widgetTitle,
        description: widgetDescription,
        graphType: "none",
      };

      setCategories(
        categories.map((category) =>
          category.id === categoryId
            ? { ...category, widgets: [...category.widgets, newWidget] }
            : category
        )
      );
    }
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <input
          type="text"
          placeholder="Search Widgets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button
          className="add-widget-button"
          onClick={() => setShowModal(true)}
        >
          <span style={{ color: "#36454f" }}>
            Add Widget <FaPlus />
          </span>
        </button>
        <div className="header-icons">
          <FaSyncAlt className="icon" style={{ color: "#36454f" }} />
          <FaEllipsisV className="icon" style={{ color: "#36454f" }} />
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaClock style={{ color: "#003399" }} />
              <span style={{ color: "#003399" }}>Last 2 Days</span>
              <FaChevronDown className="dropdown-arrow" />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                {/* Menu items can be added here if needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      {filteredCategories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}

      {/* Modal for adding a new category */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Create a New Category</h3>
            <input
              type="text"
              placeholder="Enter Category Title"
              value={newCategoryTitle}
              onChange={(e) => setNewCategoryTitle(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleAddCategory}>Add Category</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
