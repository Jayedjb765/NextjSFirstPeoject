import Link from "next/link";

const Sidebar = () => {
  return (
    <ul className="menu menu-vertical bg-base-200 rounded-box">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/settings">settings</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
