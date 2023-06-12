const Cultural = () => {
  const data = [
    {
      id: 1,
      title: "Understanding Cultural Diversity",
      list1:
        "Exploring the concept of culture and its various components, including language, customs, beliefs, values, and traditions.",
      list2:
        "Recognizing the diversity of cultures within our local communities and globally.",
      list3:
        "Challenging stereotypes and prejudices to promote a more inclusive and accepting mindset.",
    },
    {
      id: 2,
      title: "Cultural Awareness and Sensitivity",
      list1:
        "Developing self-awareness and examining our own cultural biases and assumptions.",
      list2:
        "Learning to recognize and appreciate cultural differences in communication styles, nonverbal cues, and social norms.",
      list3:
        "Cultivating empathy and respect for diverse cultural practices and perspectives.",
    },
    {
      id: 3,
      title: "Promoting Intercultural Communication",
      list1:
        "Developing effective cross-cultural communication skills, including active listening, empathy, and open-mindedness.",
      list2:
        "Encouraging dialogue and exchange of ideas among individuals from different cultural backgrounds.",
      list3:
        "Fostering understanding and resolving conflicts that may arise from cultural differences.",
    },
    {
      id: 4,
      title: "Celebrating Cultural Heritage",
      list1:
        "Recognizing and celebrating the rich cultural heritage and contributions of different ethnic groups, religions, and indigenous communities.",
      list2:
        "Organizing cultural events, festivals, and exhibitions to showcase diverse traditions, arts, and cuisine.",
      list3:
        "Promoting cultural exchange programs and intercultural learning opportunities.",
    },
    {
      id: 5,
      title: "Education on Social Justice and Equity",
      list1:
        "Exploring social justice issues related to cultural diversity, such as racial discrimination, gender inequality, and socioeconomic disparities.",
      list2: "Providing education on human rights, equality, and inclusivity.",
      list3:
        "Empowering individuals to challenge discrimination and advocate for social justice.",
    },
    {
      id: 6,
      title: "Multicultural Curriculum and Learning Materials",
      list1:
        "Integrating multicultural perspectives into educational curricula across various disciplines.",
      list2:
        "Incorporating diverse literature, films, and resources that reflect different cultures and experiences.",
      list3:
        "Encouraging students to explore and appreciate their own cultural heritage while learning about others.",
    },
    {
      id: 7,
      title: "Community Engagement and Partnerships",
      list1:
        "Collaborating with local cultural organizations, community centers, and ethnic associations to promote cultural understanding and diversity.",
      list2:
        "Participating in community events, workshops, and initiatives that foster cultural exchange and dialogue.",
      list3:
        "Establishing partnerships with schools, colleges, and workplaces to create inclusive environments that value diversity.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Cultural and Diversity Education
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
                  {/* <li>{item.list4}</li> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cultural;
