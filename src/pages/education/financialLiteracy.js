const FinancialLiteracy = () => {
  const data = [
    {
      id: 1,
      title: "Budgeting and Expense Management",
      list1:
        "Understanding the importance of budgeting and creating a spending plan.",
      list2:
        "Tracking income and expenses to gain a clear understanding of your financial situation.",
      list3:
        "Identifying and prioritizing essential expenses while managing discretionary spending.",
      list4:
        "Developing strategies to save money and reduce unnecessary expenses.",
    },
    {
      id: 2,
      title: "Saving and Investing",
      list1:
        "Understanding the importance of saving for short-term and long-term financial goals.",
      list2:
        "Exploring different saving strategies, such as setting up an emergency fund and automating savings.",
      list3:
        "Learning about investment options, including stocks, bonds, mutual funds, and retirement accounts.",
      list4:
        "Evaluating risk tolerance and considering factors like diversification and asset allocation.",
    },
    {
      id: 3,
      title: "Debt Management",
      list1: "Understanding different types of debt and their implications.",
      list2:
        "Developing strategies to manage and reduce debt, such as creating a repayment plan and negotiating with creditors.",
      list3:
        "Exploring techniques to avoid excessive borrowing and make responsible borrowing decisions.",
      list4:
        "Understanding credit scores, credit reports, and maintaining a healthy credit history.",
    },
    {
      id: 4,
      title: "Financial Goal Setting",
      list1:
        "Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) financial goals.",
      list2: "Prioritizing goals and creating a roadmap to achieve them.",
      list3:
        "Breaking down long-term goals into smaller, manageable milestones.",
      list4: "Tracking progress and adjusting goals as needed.",
    },
    {
      id: 5,
      title: "Understanding Financial Products and Services",
      list1:
        "Learning about banking services, including different types of accounts, fees, and electronic banking options.",
      list2:
        "Exploring insurance options, such as health, life, and property insurance.",
      list3:
        "Understanding financial terms and concepts, such as interest rates, inflation, and compounding.",
    },
    {
      id: 6,
      title: "Consumer Rights and Responsibilities",
      list1: "Understanding consumer rights and protection laws.",
      list2:
        "Learning to make informed purchasing decisions and avoiding scams and fraudulent activities.",
      list3:
        "Exploring techniques to compare prices, research products, and negotiate effectively.",
    },
    {
      id: 7,
      title: "Financial Planning for Life Events",
      list1:
        "Planning for major life events, such as buying a home, starting a family, or retirement.",
      list2:
        "Exploring strategies to manage financial challenges during unexpected situations, such as job loss or medical emergencies.",
      list3:
        "Understanding the importance of estate planning, wills, and healthcare directives.",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center w-full text-3xl tracking-wide">
        Financial Literacy: Building a Strong Foundation for Financial
        Well-being
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
export default FinancialLiteracy;
