import React from "react";
import Link from "next/link";
import Image from "next/image";
import incident from "./assets/trainIncident.jpg";

const DonationCard = () => {
  const data = [
    {
      userId: 1,
      id: 1,
      title: "Deadly Indian rail crash",
      body: "At least 261 people have been killed and 1,000 are injured in a crash involving three trains in India's eastern Odisha state.",
      image: incident,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-300 ease-in-out"
            key={item.id}
          >
            <Link href="#">
              <div className="relative w-full">
                <Image
                  className="rounded-t-lg"
                  src={item.image}
                  alt="Incident"
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.body}
              </p>
              <Link className="flex justify-end" href="/amount">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
