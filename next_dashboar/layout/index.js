import {
  faArrowsUpDownLeftRight,
  faBars,
  faBoxArchive,
  faCropSimple,
  faFileExport,
  faFileImport,
  faFileInvoiceDollar,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/pages/Navbar";
import SideBar from "../components/pages/SideBar";
const Container = styled.div``;
const Layout = (props) => {
  const { children } = props;
  const [menus, setMenus] = useState([
    {
      key: 1,
      name: "Danh mục",
      link: "/category",
      open: true,
      children: [
        { key: 1, name: "Loại sản phẩm", link: "/", icon: faBars },
        { key: 2, name: "Sản phẩm", link: "/", icon: faBars },
        { key: 3, name: "Nhà cung cấp", link: "/", icon: faBars },
        { key: 4, name: "Kho", link: "/", icon: faBars },
        { key: 5, name: "Loại kho", link: "/", icon: faBars },
      ],
    },
    {
      key: 2,
      name: "Quản lý kho",
      link: "/warehouse-management",
      icon: "",
      open: true,
      children: [
        {
          key: 1,
          name: "Nhập kho",
          link: "/warehouse-management/warehouse",
          icon: faFileImport,
        },
        { key: 2, name: "Xuất kho", link: "/", icon: faFileExport },
        { key: 3, name: "Chuyển kho", link: "/", icon: faCropSimple },
        { key: 4, name: "Kiểm kho", link: "/", icon: faBoxArchive },
        { key: 5, name: "Mua hàng PO", link: "/", icon: faFileInvoiceDollar },
      ],
    },
    {
      key: 3,
      name: "Tùy chỉnh",
      link: "/setting",
      open: true,
      children: [
        { key: 1, name: "Nhân viên", link: "/", icon: faUser },
        {
          key: 2,
          name: "Phân quyền",
          link: "/",
          icon: faArrowsUpDownLeftRight,
        },
        { key: 3, name: "Cài đặt hệ thống", link: "/", icon: faGear },
      ],
    },
  ]);
  const [navMenu, setNavMenu] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(true);
  const handleNavLink = (obj, child) => {
    let newNav = { parent: obj.name, child: child.name };

    setNavMenu([newNav]);
  };
  const handleOpenCloseMenu = (i) => {
    let newArr = [...menus];
    newArr[i].open = !newArr[i].open;
    setMenus(newArr);
  };
  const handleOpenCloseSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <Container className="flex">
      <SideBar
        menus={menus}
        handleOpenCloseMenu={handleOpenCloseMenu}
        handleNavLink={handleNavLink}
        openSideBar={openSideBar}
      />
      <div className="flex flex-col w-full">
        <Navbar
          navMenu={navMenu}
          handleOpenCloseSideBar={handleOpenCloseSideBar}
        />
        <div className="p-10 bg-white min-h-screen">{children}</div>
      </div>
    </Container>
  );
};

export default Layout;
