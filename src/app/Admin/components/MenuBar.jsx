'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("Notice");

  const menuItems = [
    { name: "Notice", path: "/Admin/pages/notice" },
    { name: "Routine", path: "/Admin/pages/routine" },
    { name: "Students Data", path: "/Admin/pages/students-data" },
    { name: "Admission", path: "/Admin/pages/admission" },
  ];

  const pathname = usePathname();

  // Update activeItem based on current path
  useEffect(() => {
    const current = menuItems.find(item => pathname.startsWith(item.path));
    if (current) {
      setActiveItem(current.name);
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  return (
    <div
      style={{
        width: "200px",
        borderRight: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Image width={120} height={120}
            className="object-contain flex mx-auto mb-5"
            src="/header/monogram.png"
            alt="monogram"
          />
      </div>
      {menuItems.map(({ name, path }) => (
        <Link key={name} href={path} style={{ textDecoration: "none" }}>
          <div
            onClick={() => setActiveItem(name)}
            style={{
              padding: "12px",
              cursor: "pointer",
              backgroundColor: activeItem === name ? "#28a745" : "transparent",
              color: activeItem === name ? "#fff" : "#000",
              transition: "background-color 0.2s ease",
            }}
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
