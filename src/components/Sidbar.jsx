import { useState } from "react";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import { sidebarMenu } from "../data/data";

const iconsMap = {
  FaAngleRight: <FaAngleRight />,
  FaArrowRightLong: <FaArrowRightLong />,
};

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // State to handle the active dropdown menu

  const handleToggle = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id)); // Toggle dropdown based on id
  };
  return (
    <div
      className="bg-warning p-3"
      style={{
        height: "89vh",
      }}
    >
      <ul>
        {sidebarMenu?.map((menu) => (
          <li key={menu.id}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleToggle(menu.id)} // Toggle dropdown on click
              className="d-flex align-items-center"
            >
              <span>{iconsMap[menu.icon]}</span>
              <span>{menu.text}</span>
            </div>

            {/* Render the dropdown if categories exist and the menu is active */}
            {menu.categories && activeMenu === menu.id && (
              <ul className="ml-4">
                {menu.categories.map((category) => (
                  <li key={category.id}>
                    <span>{category.catName}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
