const LifeSkillsTraining = () => {
  const data = [
    {
      id: 1,
      title: "Effective Communication",
      list1:
        "Understanding the importance of active listening and expressing oneself clearly.",
      list2: "Developing effective verbal and non-verbal communication skills.",
      list3: "Practicing empathy and understanding others' perspectives.",
      list4:
        "Enhancing communication in personal and professional relationships.",
    },
    {
      id: 2,
      title: "Time Management",
      list1: "Setting clear goals and priorities.",
      list2:
        "Developing strategies to prioritize tasks and manage time effectively.",
      list3: "Overcoming procrastination and staying focused.",
      list4: "Creating schedules and routines for better time management.",
    },
    {
      id: 3,
      title: "Problem-Solving and Decision-Making",
      list1: "Analyzing problems and identifying possible solutions.",
      list2: "Evaluating pros and cons and making informed decisions.",
      list3:
        "Applying critical thinking and creative problem-solving techniques.",
      list4: "Building resilience and adapting to unexpected challenges.",
    },
    {
      id: 4,
      title: "Emotional Intelligence",
      list1: "Understanding and managing emotions effectively.",
      list2: "Developing self-awareness and self-regulation.",
      list3: "Empathy and understanding others' emotions.",
      list4:
        "Building positive relationships and resolving conflicts constructively.",
    },
    {
      id: 5,
      title: "Stress Management",
      list1: "Recognizing signs of stress and its impact on well-being.",
      list2:
        "Practicing relaxation techniques, such as deep breathing and mindfulness.",
      list3: "Developing healthy coping mechanisms and self-care strategies.",
      list4: "Balancing work, personal life, and leisure activities.",
    },
    {
      id: 6,
      title: "Financial Literacy",
      list1:
        "Understanding basic financial concepts, such as budgeting, saving, and investing.",
      list2: "Managing personal finances effectively and avoiding debt.",
      list3:
        "Making informed decisions regarding expenses and financial planning.",
      list4: "Building a strong foundation for long-term financial well-being.",
    },
    {
      id: 7,
      title: "Adaptability and Resilience",
      list1: "Embracing change and managing transitions effectively.",
      list2: "Developing flexibility and adaptability in various situations.",
      list3: "Building resilience to bounce back from setbacks and challenges.",
      list4: "Cultivating a growth mindset and embracing continuous learning.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Life Skills Training
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item, index) => {
          return (
            <div
              className="bg-[#FDE68A] rounded-xl w-72 sm:w-96 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
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
