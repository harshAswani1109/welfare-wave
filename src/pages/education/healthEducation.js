const HealthEducation = () => {
  const data = [
    {
      id: 1,
      title: "Nutrition and Healthy Eating",
      list1:
        "Understanding the importance of a balanced diet and its impact on overall health.",
      list2:
        "Learning about essential nutrients, portion control, and food groups.",
      list3:
        "Exploring the benefits of incorporating fruits, vegetables, whole grains, and lean proteins into daily meals.",
      list4:
        "Tips for meal planning, healthy snacking, and making mindful food choices.",
    },
    {
      id: 2,
      title: "Physical Activity and Exercise",
      list1:
        "Recognizing the importance of regular physical activity for maintaining a healthy weight and overall fitness.",
      list2:
        "Understanding different types of exercises, including aerobic, strength training, and flexibility exercises.",
      list3:
        "Tips for incorporating physical activity into daily routines, setting fitness goals, and staying motivated.",
      list4:
        "Exploring the benefits of an active lifestyle on mental health and stress reduction.",
    },
    {
      id: 3,
      title: "Mental Health and Stress Management",
      list1:
        "Raising awareness about mental health and the importance of emotional well-being.",
      list2:
        "Understanding common mental health conditions, such as anxiety and depression.",
      list3:
        "Promoting stress management techniques, such as mindfulness, relaxation exercises, and seeking support.",
      list4:
        "Encouraging open conversations about mental health and reducing the stigma associated with seeking help.",
    },
    {
      id: 4,
      title: "Preventive Healthcare",
      list1:
        "Highlighting the significance of preventive healthcare measures for early detection and disease prevention.",
      list2:
        "Promoting regular health check-ups, screenings, and vaccinations.",
      list3:
        "Educating individuals about common preventable diseases, such as cardiovascular diseases, diabetes, and certain cancers.",
      list4:
        "Encouraging the adoption of healthy habits, such as regular handwashing, practicing safe sex, and avoiding tobacco and alcohol abuse.",
    },
    {
      id: 5,
      title: "Sleep Hygiene",
      list1:
        "Educating individuals about the importance of quality sleep for overall health and well-being.",
      list2:
        "Discussing the recommended sleep duration for different age groups.",
      list3:
        "Providing tips for improving sleep hygiene, such as establishing a bedtime routine, creating a sleep-friendly environment, and avoiding electronic devices before bed.",
    },
    {
      id: 6,
      title: "Sexual and Reproductive Health",
      list1:
        "Providing comprehensive information on sexual and reproductive health, including contraception, sexually transmitted infections (STIs), and safe sex practices.",
      list2:
        "Promoting healthy relationships, consent, and communication in sexual encounters.",
      list3:
        "Encouraging regular sexual health check-ups and access to reproductive healthcare services.",
    },
    {
      id: 7,
      title: "Substance Abuse Prevention",
      list1:
        "Educating individuals about the risks associated with substance abuse, including tobacco, alcohol, and drug use.",
      list2:
        "Providing information on the potential consequences of substance abuse on physical and mental health.",
      list3:
        "Promoting strategies for prevention, including peer support, stress management, and seeking professional help.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Health Education: Empowering Individuals for a Healthy Lifestyle
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
export default HealthEducation;
