import React, { useState } from 'react';

const SubMenu = ({ title }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <li
      className="has-submenu"
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
    >
      {title}
      {isSubMenuOpen && (
        <ul className="submenu">
          <li>Sub Item 1.1</li>
          <li>Sub Item 1.2</li>
          <li>
            
            <SubMenu title="Sub Sub Menu" />
          </li>
        </ul>
      )}
    </li>
  );
};

export default SubMenu;