import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="container mx-auto py-6 px-3">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          width={100}
          height={200}
        //   className=" h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <div className="space-x-3 md:space-x-7">
            <Link href="/Users" className="hover:text-blue-600">Home</Link>
            <Link href="/" className="hover:text-blue-600">DS</Link>
            <Link href="/" className="hover:text-blue-600">Algo</Link>
        </div>
        <Link href="/Authentication"> <Button gradientMonochrome="success" pill={true}>Login</Button></Link>
      </div>
    </nav>
  );
};

export default NavBar;
