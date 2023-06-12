import Image from "next/image";
import ayush from "/public/ayush.jpg";
import sashikant from "/public/sashikant.jpg";
import harsh from "/public/harsh.jpg";
import suraj from "/public/suraj.jpg";

const CoreTeam = () => {
  const cc = [
    {
      avatar: harsh,
      name: "Harsh Aswani",
      position: "Leader",
    },
    {
      avatar: ayush,
      name: "Ayush Garg",
      position: "Member",
    },
    {
      avatar: sashikant,
      name: "Sashikanta Mohanty",
      position: "Member",
    },
    {
      avatar: suraj,
      name: "Suraj Verma",
      position: "Member",
    },
  ];
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-60 "
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <Image
                src={cc.avatar}
                alt="image"
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
