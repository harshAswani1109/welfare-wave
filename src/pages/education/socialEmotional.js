const LifeSkillsTraining = () => {
  const data = [
    {
      id: 1,
      title: "Self-Awareness",
      list1:
        "Understanding and recognizing one's emotions, strengths, and areas for growth.",
      list2: "Developing self-confidence and a positive self-image.",
      list3: "Cultivating mindfulness and self-reflection practices.",
      list4: "Building a strong sense of personal identity and values.",
    },
    {
      id: 2,
      title: "Emotional Regulation",
      list1: "Identifying and understanding emotions in oneself and others.",
      list2:
        "Developing strategies to manage and regulate emotions effectively.",
      list3:
        "Practicing techniques for stress reduction and emotional balance.",
      list4: "Enhancing emotional resilience and coping skills.",
    },
    {
      id: 3,
      title: "Empathy and Perspective-Taking",
      list1:
        "Understanding and appreciating the feelings and perspectives of others.",
      list2:
        "Developing empathy through active listening and understanding nonverbal cues.",
      list3:
        "Practicing kindness, compassion, and empathy in daily interactions.",
      list4:
        "Promoting inclusive and respectful behavior towards diverse individuals and communities.",
    },
    {
      id: 4,
      title: "Relationship Building and Social Skills",
      list1:
        "Developing effective communication skills, including active listening and clear expression.",
      list2: "Practicing collaboration, teamwork, and conflict resolution.",
      list3:
        "Building positive relationships based on trust, respect, and empathy.",
      list4:
        "Navigating social situations and demonstrating appropriate behavior in various contexts.",
    },
    {
      id: 5,
      title: "Responsible Decision-Making",
      list1:
        "Analyzing situations, considering ethical implications, and evaluating potential consequences.",
      list2:
        "Applying problem-solving strategies to make informed and responsible decisions.",
      list3:
        "Setting and working towards goals aligned with personal values and long-term well-being.",
      list4:
        "Developing strategies to resist peer pressure and make choices that promote positive outcomes.",
    },
    {
      id: 6,
      title: "Self-Motivation and Goal Setting",
      list1:
        "Setting realistic and meaningful goals for personal and academic growth.",
      list2:
        "Developing strategies for self-motivation, perseverance, and resilience.",
      list3: "Celebrating achievements and learning from setbacks.",
      list4:
        "Cultivating a growth mindset and embracing challenges as opportunities for learning and growth.",
    },
    {
      id: 7,
      title: "Social Awareness and Civic Responsibility",
      list1:
        "Understanding the importance of social justice, equity, and inclusivity.",
      list2:
        "Recognizing and challenging stereotypes, bias, and discrimination.",
      list3:
        "Engaging in community service and taking responsibility for making a positive impact.",
      list4: "Promoting fairness, empathy, and respect in society.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Social and Emotional Learning
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item, index) => {
          return (
            <div
              className="bg-[#ECEEFF] rounded-xl w-72 sm:w-96 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
              key={item.id}
            >
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 sm:w-96 md:w-auto">
                <div className="mt-3 font-semibold text-2xl">{item.id}.</div>
                {/* <div className="text-xl font-semibold w-60 md:w-auto">
                  {item.title}
                </div> */}
                <div className="my-4">
                  <li>{item.list1}</li>
                  <li>{item.list2}</li>
                  <li>{item.list3}</li>
                  <li>{item.list4}</li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LifeSkillsTraining;
