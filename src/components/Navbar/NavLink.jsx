import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, label, setOpen }) => {
  const pages = usePathname();
  return (
    <Link href={href} onClick={() => setOpen(false)}>
      <li
        className={`${
          pages === href ? "bg-[#F2F2F2] " : ""
        } md:mr-4 text-xl md:my-0 my-7 px-3  hover:shadow-md hover:border-b-4  transition-all ease-in-out duration-100 cursor-pointer rounded-md `}
      >
        <span>{label}</span>
      </li>
    </Link>
  );
};

export default NavLink;
