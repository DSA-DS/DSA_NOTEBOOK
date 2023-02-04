import { Accordion } from "flowbite-react";

const Type = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <h3 className="font-semibold text-3xl my-8">Title : Sort Algorithm</h3>
        <Accordion collapseAll={true} alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>Selection sort</Accordion.Title>
            <Accordion.Content className="text-xl leading-8">
              <p className="mb-2  dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nulla soluta atque beatae! Sequi, odio numquam porro mollitia ullam, magnam et nam qui ad quia laboriosam similique amet totam a aut, non nisi necessitatibus iure perferendis minima vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam magni voluptatibus animi beatae dignissimos quos exercitationem recusandae distinctio accusantium placeat amet dolores dolor, eaque tenetur ad quo. Repellendus alias at est doloremque!
              </p>
              <p className=" dark:text-gray-400">
                Check out this video to learn {" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Selection sort
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Bubble sort</Accordion.Title>
            <Accordion.Content className="text-xl">
              <p className="mb-2  dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nulla soluta atque beatae! Sequi, odio numquam porro mollitia ullam, magnam et nam qui ad quia laboriosam similique amet totam a aut, non nisi necessitatibus iure perferendis minima vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam magni voluptatibus animi beatae dignissimos quos exercitationem recusandae distinctio accusantium placeat amet dolores dolor, eaque tenetur ad quo. Repellendus alias at est doloremque!
              </p>
              <p className=" dark:text-gray-400">
                Check out this video to learn {" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Selection sort
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Insertion sort</Accordion.Title>
            <Accordion.Content className="text-xl">
              <p className="mb-2  dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nulla soluta atque beatae! Sequi, odio numquam porro mollitia ullam, magnam et nam qui ad quia laboriosam similique amet totam a aut, non nisi necessitatibus iure perferendis minima vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam magni voluptatibus animi beatae dignissimos quos exercitationem recusandae distinctio accusantium placeat amet dolores dolor, eaque tenetur ad quo. Repellendus alias at est doloremque!
              </p>
              <p className=" dark:text-gray-400">
                Check out this video to learn {" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Selection sort
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Quick sort</Accordion.Title>
            <Accordion.Content className="text-xl">
              <p className="mb-2  dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nulla soluta atque beatae! Sequi, odio numquam porro mollitia ullam, magnam et nam qui ad quia laboriosam similique amet totam a aut, non nisi necessitatibus iure perferendis minima vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam magni voluptatibus animi beatae dignissimos quos exercitationem recusandae distinctio accusantium placeat amet dolores dolor, eaque tenetur ad quo. Repellendus alias at est doloremque!
              </p>
              <p className=" dark:text-gray-400">
                Check out this video to learn {" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Selection sort
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Heap sort</Accordion.Title>
            <Accordion.Content className="text-xl">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nulla soluta atque beatae! Sequi, odio numquam porro mollitia ullam, magnam et nam qui ad quia laboriosam similique amet totam a aut, non nisi necessitatibus iure perferendis minima vitae! Hic porro fugiat voluptates earum nemo fugit quibusdam magni voluptatibus animi beatae dignissimos quos exercitationem recusandae distinctio accusantium placeat amet dolores dolor, eaque tenetur ad quo. Repellendus alias at est doloremque!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this video to learn {" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Selection sort
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          
        </Accordion>
      </div>
    </div>
  );
};

export default Type;
