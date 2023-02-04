import { Accordion, Button } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
// import modal bcz of not support in ts
const Modals = dynamic(
  () => {
    return import("@/components/Modals");
  },
  { ssr: false }
);

const Profile = () => {
  const [modalShow, setModalShow]= useState(false)
  return (
    <div className="container mx-auto">
      <Head>
        <title>Profile</title>
        <meta name="description" content="DSA DS Authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-around items-center bg-slate-100 py-6 rounded-xl">
        <h3 className="text-3xl"> Your articles - </h3>
        <Link href="/Profile/:profile/New-Article">
          <Button outline={true} gradientDuoTone="purpleToPink">
            Add new articles
          </Button>
        </Link>
      </div>
      <h3 className="font-semibold text-xl my-8">Title : Sort Algorithm</h3>
      <Accordion collapseAll={true} alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Selection sort</Accordion.Title>
          <Accordion.Content className="text-xl leading-8">
            <p className="mb-2  dark:text-gray-400">
              hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              fugit nulla soluta atque beatae! Sequi, odio numquam porro
              mollitia ullam, magnam et nam qui ad quia laboriosam similique
              amet totam a aut, non nisi necessitatibus iure perferendis minima
              vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam
              magni voluptatibus animi beatae dignissimos quos exercitationem
              recusandae distinctio accusantium placeat amet dolores dolor,
              eaque tenetur ad quo. Repellendus alias at est doloremque!
            </p>
            <p className=" dark:text-gray-400">
              Check out this video to learn{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Selection sort
              </a>
            </p>
            <div className="flex justify-end gap-4 items-center">
              <Button gradientMonochrome="lime" className="shadow-md hover:shadow-xl" onClick={()=>setModalShow(true)}>Edit</Button>
              <Button gradientMonochrome="failure" className="shadow-md hover:shadow-xl">Delete</Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Bubble sort</Accordion.Title>
          <Accordion.Content className="text-xl">
            <p className="mb-2  dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              fugit nulla soluta atque beatae! Sequi, odio numquam porro
              mollitia ullam, magnam et nam qui ad quia laboriosam similique
              amet totam a aut, non nisi necessitatibus iure perferendis minima
              vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam
              magni voluptatibus animi beatae dignissimos quos exercitationem
              recusandae distinctio accusantium placeat amet dolores dolor,
              eaque tenetur ad quo. Repellendus alias at est doloremque!
            </p>
            <p className=" dark:text-gray-400">
              Check out this video to learn{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Selection sort
              </a>
            </p>
            <div className="flex justify-end gap-4 items-center">
              <Button gradientMonochrome="lime" className="shadow-md hover:shadow-xl" onClick={()=>setModalShow(true)}>Edit</Button>
              <Button gradientMonochrome="failure" className="shadow-md hover:shadow-xl">Delete</Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Insertion sort</Accordion.Title>
          <Accordion.Content className="text-xl">
            <p className="mb-2  dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              fugit nulla soluta atque beatae! Sequi, odio numquam porro
              mollitia ullam, magnam et nam qui ad quia laboriosam similique
              amet totam a aut, non nisi necessitatibus iure perferendis minima
              vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam
              magni voluptatibus animi beatae dignissimos quos exercitationem
              recusandae distinctio accusantium placeat amet dolores dolor,
              eaque tenetur ad quo. Repellendus alias at est doloremque!
            </p>
            <p className=" dark:text-gray-400">
              Check out this video to learn{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Selection sort
              </a>
            </p>
            <div className="flex justify-end gap-4 items-center">
              <Button gradientMonochrome="lime" className="shadow-md hover:shadow-xl" onClick={()=>setModalShow(true)}>Edit</Button>
              <Button gradientMonochrome="failure" className="shadow-md hover:shadow-xl">Delete</Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Quick sort</Accordion.Title>
          <Accordion.Content className="text-xl">
            <p className="mb-2  dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              fugit nulla soluta atque beatae! Sequi, odio numquam porro
              mollitia ullam, magnam et nam qui ad quia laboriosam similique
              amet totam a aut, non nisi necessitatibus iure perferendis minima
              vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam
              magni voluptatibus animi beatae dignissimos quos exercitationem
              recusandae distinctio accusantium placeat amet dolores dolor,
              eaque tenetur ad quo. Repellendus alias at est doloremque!
            </p>
            <p className=" dark:text-gray-400">
              Check out this video to learn{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Selection sort
              </a>
            </p>
            <div className="flex justify-end gap-4 items-center">
              <Button gradientMonochrome="lime" className="shadow-md hover:shadow-xl" onClick={()=>setModalShow(true)}>Edit</Button>
              <Button gradientMonochrome="failure" className="shadow-md hover:shadow-xl">Delete</Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Heap sort</Accordion.Title>
          <Accordion.Content className="text-xl">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              fugit nulla soluta atque beatae! Sequi, odio numquam porro
              mollitia ullam, magnam et nam qui ad quia laboriosam similique
              amet totam a aut, non nisi necessitatibus iure perferendis minima
              vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam
              magni voluptatibus animi beatae dignissimos quos exercitationem
              recusandae distinctio accusantium placeat amet dolores dolor,
              eaque tenetur ad quo. Repellendus alias at est doloremque!
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this video to learn{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Selection sort
              </a>
            </p>
            <div className="flex justify-end gap-4 items-center">
              <Button gradientMonochrome="lime" className="shadow-md hover:shadow-xl" onClick={()=>setModalShow(true)}>Edit</Button>
              <Button gradientMonochrome="failure" className="shadow-md hover:shadow-xl">Delete</Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <Modals states = {[modalShow, setModalShow]}/>
    </div>
  );
};

export default Profile;
