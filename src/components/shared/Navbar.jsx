"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/about"
                className={
                  pathname == "/about"
                    ? "text-blue-500 underline"
                    : "text-black hover:underline"
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={
                  pathname == "/products"
                    ? "text-blue-500 underline"
                    : "text-black hover:underline"
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/counter"
                className={
                  pathname == "/counter"
                    ? "text-blue-500 underline"
                    : "text-black hover:underline"
                }
              >
                Counter
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={
                  pathname == "/login"
                    ? "text-blue-500 underline"
                    : "text-black hover:underline"
                }
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/about"
              className={
                pathname == "/about"
                  ? "text-blue-500 underline"
                  : "text-black hover:underline"
              }
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                pathname == "/products"
                  ? "text-blue-500 underline"
                  : "text-black hover:underline"
              }
            >
              Products{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/counter"
              className={
                pathname == "/counter"
                  ? "text-blue-500 underline"
                  : "text-black hover:underline"
              }
            >
              Counter
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={
                pathname == "/login"
                  ? "text-blue-500 underline"
                  : "text-black hover:underline"
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
