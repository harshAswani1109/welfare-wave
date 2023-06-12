import Link from "next/link";

const DropDown = ({ handler }) => {
  const handleClick = () => {
    handler();
  };
  const data = [
    {
      link: "/education/lifeSkillEducation",
      title: "Life Skills Training",
    },
    {
      link: "/education/healthEducation",
      title: "Health Education",
    },
    {
      link: "/education/financialLiteracy",
      title: "Financial Literacy",
    },
    {
      link: "/education/socialEmotional",
      title: "Social and Emotional Learning",
    },
    {
      link: "/education/legalRights",
      title: "Legal Rights and Advocacy",
    },
    {
      link: "/education/environmental",
      title: "Environmental Awareness",
    },
    {
      link: "/education/culturalDiversity",
      title: "Cultural and Diversity Education",
    },
  ];

  return (
    <div className="origin-top-right absolute mt-2 w-64 max-md:first-letter:left-2 md:-right-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {data?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            role="menuitem"
            onClick={handleClick}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
