const EnvironmentalAwareness = () => {
  const data = [
    {
      id: 1,
      title: "Understanding Environmental Issues",
      list1:
        "Exploring major environmental challenges, such as climate change, deforestation, pollution, and loss of biodiversity.",
      list2:
        "Understanding the interconnections between human activities, ecosystems, and the environment.",
      list3:
        "Recognizing the importance of environmental conservation and sustainable development.",
    },
    {
      id: 2,
      title: "Climate Change and Mitigation",
      list1: "Understanding the causes and consequences of climate change.",
      list2:
        "Learning about greenhouse gases, the greenhouse effect, and the role of human activities in climate change.",
      list3:
        "Exploring strategies to mitigate climate change, such as reducing carbon emissions, promoting renewable energy, and adapting to changing climate patterns.",
    },
    {
      id: 3,
      title: "Conservation and Biodiversity",
      list1:
        "Understanding the importance of biodiversity and the threats to ecosystems and species.",
      list2:
        "Exploring ways to protect and restore habitats, promote sustainable agriculture, and reduce wildlife trafficking.",
      list3:
        "Learning about conservation organizations and initiatives working to preserve biodiversity.",
    },
    {
      id: 4,
      title: "Sustainable Resource Management",
      list1:
        "Exploring sustainable practices for water conservation, energy efficiency, waste reduction, and recycling.",
      list2:
        "Learning about sustainable agriculture and responsible consumption patterns.",
      list3:
        "Promoting the use of renewable resources and reducing reliance on non-renewable resources.",
    },
    {
      id: 5,
      title: "Environmental Education and Awareness",
      list1:
        "Promoting environmental education in schools, communities, and workplaces.",
      list2:
        "Raising awareness about environmental issues through campaigns, workshops, and educational programs.",
      list3:
        "Encouraging eco-friendly practices and fostering a culture of sustainability.",
    },
    {
      id: 6,
      title: "Responsible Travel and Ecotourism",
      list1:
        "Understanding the impact of tourism on the environment and local communities.",
      list2:
        "Exploring sustainable travel practices, such as minimizing carbon footprint, supporting local economies, and respecting cultural heritage.",
      list3:
        "Learning about ecotourism initiatives and responsible travel organizations.",
    },
    {
      id: 7,
      title: "Individual and Collective Action",
      list1:
        "Empowering individuals to make sustainable choices in their daily lives, such as using public transportation, conserving energy, and reducing waste.",
      list2:
        "Encouraging community engagement and collective action for environmental conservation and advocacy.",
      list3:
        "Supporting and participating in environmental initiatives, clean-up drives, and community gardening projects.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Environmental Awareness
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
export default EnvironmentalAwareness;
