"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "post",
      path: "/post",
    },
  ];

  const handler = () => {
    router.push("/about");
  };

  // Jodi ei speicif path e jai tahole ei navbar dekhabe kintu onno sob jaigay main layout e jei navbar disi oita dekhabe !
  if (pathName.includes("dashboard"))
    return <div className=" bg-green-200">Dashboard LayOut</div>;

  return (
    <nav className=" bg-red-700 text-white py-4 px-6 flex justify-between items-center">
      <h6>
        Next <span className=" text-cyan-500 text-3xl">Hero</span>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${pathName === link.path ? "text-cyan-500" : ""}`}
          >
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
      <button onClick={handler} className=" bg-white text-cyan-400 p-4">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
