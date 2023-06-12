import Link from "next/link";
const DropDown = () => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <Link
          href="/education/lifeSkillEducation"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Life Skills Training
        </Link>
        <Link
          href="/education/healthEducation"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Health Education
        </Link>
        <Link
          href="/education/financialLiteracy"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Financial Literacy
        </Link>
        <Link
          href="/education/socialEmotional"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Social and Emotional Learning
        </Link>
        <Link
          href="/education/legalRights"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Legal Rights and Advocacy
        </Link>
        <Link
          href="/education/environmental"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Environmental Awareness
        </Link>
        <Link
          href="/education/culturalDiversity"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Cultural and Diversity Education
        </Link>
      </div>
    </div>
  );
};
export default DropDown;
