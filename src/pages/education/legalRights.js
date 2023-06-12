const LegalRightsAdvocacy = () => {
  const data = [
    {
      id: 1,
      title: "Introduction to Legal Rights",
      list1:
        "Understanding the concept of legal rights and their importance in society.",
      list2:
        "Exploring different types of rights, such as civil rights, human rights, and constitutional rights.",
      list3:
        "Familiarizing yourself with legal frameworks, including national and international laws and conventions.",
    },
    {
      id: 2,
      title: "Know Your Rights",
      list1:
        "Understanding your fundamental rights as an individual, including the right to freedom of speech, privacy, equality, and due process.",
      list2:
        "Educating yourself about specific rights relevant to your jurisdiction, such as consumer rights, labor rights, and tenant rights.",
      list3:
        "Familiarizing yourself with resources and organizations that provide information and support related to legal rights.",
    },
    {
      id: 3,
      title: "Navigating the Legal System",
      list1:
        "Understanding the structure of the legal system, including courts, legal procedures, and the role of different legal professionals.",
      list2:
        "Learning about alternative dispute resolution methods, such as mediation and arbitration.",
      list3:
        "Familiarizing yourself with legal terminology and common legal documents, such as contracts and legal agreements.",
    },
    {
      id: 4,
      title: "Legal Advocacy",
      list1:
        "Exploring the importance of legal advocacy in promoting social justice and equality.",
      list2:
        "Understanding the role of advocates in supporting individuals and communities facing legal challenges.",
      list3:
        "Developing effective advocacy skills, such as research, communication, and strategic planning.",
      list4:
        "Learning how to effectively collaborate with legal professionals and community organizations to advocate for change.",
    },
    {
      id: 5,
      title: "Access to Justice",
      list1:
        "Understanding barriers to access to justice, such as financial constraints, language barriers, and discrimination.",
      list2:
        "Exploring resources and organizations that provide legal aid and support for marginalized communities.",
      list3:
        "Promoting awareness and advocating for policies and initiatives that enhance access to justice for all.",
    },
    {
      id: 6,
      title: "Ethical Considerations",
      list1:
        "Understanding the ethical responsibilities of legal professionals and advocates.",
      list2:
        "Exploring ethical dilemmas and decision-making in legal advocacy.",
      list3:
        "Promoting integrity, fairness, and transparency in legal processes and advocacy efforts.",
    },
    {
      id: 7,
      title: "Creating Social Change",
      list1:
        "Exploring avenues for social change through legal advocacy, such as legislative advocacy, public interest litigation, and community organizing.",
      list2:
        "Collaborating with like-minded individuals and organizations to amplify your advocacy efforts.",
      list3:
        "Promoting awareness, education, and engagement on legal rights and social justice issues in your community.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Legal Rights and Advocacy
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item, index) => {
          return (
            <div
              className="bg-[#D1FAE5] rounded-xl w-72 sm:w-96 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
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
export default LegalRightsAdvocacy;
