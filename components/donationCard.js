import React from "react";
import Link from "next/link";
import Image from "next/image";
import incident from "./assets/trainIncident.jpg";
import mumbai from "./assets/mumbai.jpg";
import manipur from "./assets/manipur.jpg";
import { useState } from "react";
import Qr from "./qr";
import { RxCross1 } from "react-icons/rx";

const DonationCard = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };

  const data = [
    {
      id: 1,
      title: "Deadly Indian rail crash",
      body: "At least 261 people have been killed and 1,000 are injured in a crash involving three trains in India's eastern Odisha state.",
      image: incident,
    },
    {
      id: 2,
      title: "Fire at hospital in Mumbai",
      body: "Fire broke out at a hospital in Mumbai. Fire killed at least 10 people and injured over 20 others.",
      image: mumbai,
    },
    {
      id: 3,
      title: "Landslide in Manipur",
      body: "Landslide occurred in the Noney district of Manipur. The landslide killed at least 58 people, 29 Indian Army personnel and 29 civilians.",
      image: manipur,
    },
  ];

  return (
    <div>
      {dropdownOpen ? <Qr handler={handleFunction} /> : ""}
      <div className="flex justify-end max-lg:absolute w-full mt-10 pr-10">
        {dropdownOpen ? (
          <RxCross1 onClick={handleFunction} className="z-30 " />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-300 ease-in-out"
            key={item.id}
          >
            <div className="relative w-full">
              <Image
                className="rounded-t-lg h-60 w-full"
                src={item.image}
                alt="Incident"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.body}
              </p>
              <div className="flex justify-end">
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleFunction}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
