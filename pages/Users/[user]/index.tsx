import { Button } from "flowbite-react";
import Link from "next/link";

const User = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="flex justify-evenly">
        <Link href="/Users/1/ds">
          <Button
            outline={true}
            gradientDuoTone="greenToBlue"
            className="text-2xl "
          >
            Data Stucture
          </Button>
        </Link>
        <Link href="/Users/1/algo">
          <Button
            outline={true}
            gradientDuoTone="greenToBlue"
            className="text-2xl "
          >
            Algorithm
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default User;
