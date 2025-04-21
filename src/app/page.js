"use client"
import { useRouter } from "next/navigation";


const HomePage = () => {
  const router = useRouter()
  const handelNavigation = () => {
    router.push('/dasboard')
  }
  return (
    <div className="text-center">
      <h1 className="text-7xl">Hellow World</h1>
      <button onClick={handelNavigation} className="my-5">Dashboard</button>

    </div>
  );
};

export default HomePage;