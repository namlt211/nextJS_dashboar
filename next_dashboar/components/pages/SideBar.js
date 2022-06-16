import {
  faChevronDown,
  faChevronUp,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const MenuChild = styled.div`
  :hover {
    border-left: 2.5px solid #d46312;
    color: #d46312 !important;
  }
`;
const SideBar = (props) => {
  const { handleOpenCloseMenu, menus, handleNavLink, openSideBar } = props;
  const [choseMenu, setChoseMenu] = useState();
  const handleSelectMenu = (parent, child) => {
    setChoseMenu();
    setChoseMenu(`${parent}_${child}`);
  };
  return (
    <aside
      className={`w-[200px] top-0 bottom-0 left-[-300px] lg:left-0 overflow-y-auto text-center bg-[#f3f4f6] shadow h-screen duration-1000 p-2 
        ${openSideBar ? "block" : "hidden"}`}
    >
      <div className="text-[#6b707b] text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <div className="text-4xl">Logo</div>
          <div>Nice stock</div>
        </div>
        <div>
          <div className="p-3 px-5 mt-3 flex items-center duration-300 cursor-pointer">
            <div>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="ml-3">Trang chủ</div>
          </div>
        </div>
        <div className="duration-1000">
          {menus?.map((item, index) => (
            <div
              key={item.key}
              className="p-3 px-5 duration-1000 cursor-pointer"
            >
              <div
                className="flex justify-between py-2"
                onClick={() => handleOpenCloseMenu(index)}
              >
                <div>
                  <a className="uppercase">{item.name}</a>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={item.open ? faChevronDown : faChevronUp}
                  />
                </div>
              </div>
              <div className={`${item.open ? "block" : "hidden"}`}>
                {item.children.map((child) => (
                  <MenuChild
                    style={
                      choseMenu === `${item.key}_${child.key}`
                        ? {
                            borderLeft: "2.5px solid #d46312",
                            color: "#d46312",
                          }
                        : { color: "#424856" }
                    }
                    key={child.key}
                    className="w-full flex hover:text-[#d46312]"
                    onClick={() => handleSelectMenu(item.key, child.key)}
                  >
                    <div className="flex ml-5 py-2">
                      <div>
                        <FontAwesomeIcon icon={child.icon} />
                      </div>
                      <Link href={child.link}>
                        <a
                          className="ml-3"
                          onClick={() => handleNavLink(item, child)}
                        >
                          {child.name}
                        </a>
                      </Link>
                    </div>
                  </MenuChild>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
