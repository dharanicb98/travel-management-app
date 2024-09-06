import React, { useId, useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
} from "../../icons";
import { NavLink, useLocation } from "react-router-dom";

const LeftBar = () => {
  let location = useLocation();
  const [menuList, setMenuList] = useState([
    // {
    //   id: useId(),
    //   name: "Home",
    //   imageType: "svg",
    //   link: "/",
    //   svg: HomeIcon,
    //   fontSize: "text-[17px]",
    // },
    {
      id: useId(),
      name: "Dashboard",
      imageType: "svg",
      link: "/",
      svg: HomeIcon,
      fontSize: "text-[17px]",
    },
    {
      id: useId(),
      name: "Visit Places",
      imageType: "svg",
      link: "/places",
      svg: HomeIcon,
      fontSize: "text-[17px]",
      // children: [
      //   {
      //     id: useId(),
      //     name: "Checkout places",
      //     imageType: "svg",
      //     svg: HomeIcon,
      //     link: "/places/:id",
      //     fontSize: "text-[13px]",
      //   },
      // ]
    },
  ]);

  const onClickChevronButton = (data) => {
    // console.log(data);
    function updateIsActive(items) {
      items.forEach((item) => {
        if (item.id === data.id) {
          item.isActive = !item.isActive;
        }
        if (item.children) {
          updateIsActive(item.children);
        }
      });
    }
    updateIsActive(menuList);
    setMenuList([...menuList]);
  };

  // console.log(location.pathname);
  const listItems = (eachItem) => {
    return (
      <div className={`flex flex-col justify-center`} >
        <div className="flex cursor-pointer items-center w-full ">
          {eachItem?.children?.length > 0 ? (
            <div
              onClick={() => onClickChevronButton(eachItem)}
              className={`${eachItem.fontSize}  flex items-center ${eachItem.isActive && "mb-3"
                }`}
            >
              <eachItem.svg />
              <p className="pl-1 ">{eachItem.name}</p>

              <div className="mt-2 pl-1">
                {eachItem.isActive ? (
                  <div className="">
                    <ChevronDownIcon />
                  </div>
                ) : (
                  <div>
                    <ChevronRightIcon />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <NavLink
              to={eachItem.link}
              key={eachItem.name}
              className={`${location.pathname === eachItem.link &&
                "text-[#CD264F] font-semibold"
                } w-full`}
            >
              <div className={`${eachItem.fontSize} flex items-center`}>
                <eachItem.svg />
                <p className="pl-1">{eachItem.name}</p>
              </div>
            </NavLink>
          )}
        </div>

        {eachItem.isActive &&
          eachItem.children?.map((item) => {
            return (
              <div key={item.id} className="p-3 pr-0">
                {listItems(item)}
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <div className="flex justify-center items-center">
      <ul className=" flex flex-col w-full">
        {menuList.map((eachItem) => (
          <li key={eachItem.id} className="p-3 first:pt-8 last:pb-20">
            {listItems(eachItem)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;

