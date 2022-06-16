import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
const Navbar = (props) => {
  const { navMenu, handleOpenCloseSideBar } = props;
  return (
    <div className="shadow-md w-full flex justify-between px-5 py-2 items-center">
      {navMenu.length > 0 ? (
        navMenu.map((nav, i) => (
          <div key={i} className="flex text-3xl">
            <div className="ml-3 cursor-pointer">
              <FontAwesomeIcon
                onClick={() => handleOpenCloseSideBar()}
                icon={faBars}
              />
            </div>
            <div className={`ml-4 ${nav.child ? "" : "font-bold"}`}>
              {nav.parent}
            </div>
            <span className="px-2">/</span>
            <div className="font-bold">{nav.child}</div>
          </div>
        ))
      ) : (
        <div className="ml-3 text-3xl">
          <FontAwesomeIcon
            onClick={() => handleOpenCloseSideBar()}
            className="cursor-pointer"
            icon={faBars}
          />
        </div>
      )}

      <div className="flex text-4xl items-center">
        <div className="mr-7">
          <FontAwesomeIcon icon={faCircleQuestion} />
        </div>
        <div className="mr-7">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div>
          <Image
            className="rounded-full mr-7"
            src="/avatar.jpg"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
