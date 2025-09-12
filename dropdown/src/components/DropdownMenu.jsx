import React, { useState } from "react";
import SubMenu from "./SubMenu";  
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-toggle"
      >
        Menu <span>▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>Item 1</li>
          <li>
            {/* ✅ Submenu included here */}
            <SubMenu title="Sub Menu 1" />
          </li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
