import { Button } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";

const User = () => {
  return (
    <div className="container mx-auto mt-6">
      <Head>
        <title>Single User</title>
        <meta name="description" content="DSA DS Authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  mx-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Shounak Sarker
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>

      <div className="flex justify-evenly mt-12">
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
