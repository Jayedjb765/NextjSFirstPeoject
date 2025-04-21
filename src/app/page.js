import Link from "next/link";


const HomePage = () => {
  console.log("Hellow world");
  return (
    <div className="text-center">
      <h1 className="text-7xl">Hellow World</h1>
      <Link href='/dasboard'> <button className="my-5">Dashboard</button></Link>

    </div>
  );
};

export default HomePage;