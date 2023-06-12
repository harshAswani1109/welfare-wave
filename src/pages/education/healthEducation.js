const Information = () => {
  const data = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Information</h1>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item, index) => {
          return (
            <div
              className="bg-[#ECEEFF] rounded-xl w-72 sm:w-96 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
              key={item.id}
            >
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 sm:w-96 md:w-auto">
                <div className="mt-3 font-semibold text-lg">{item.id}.</div>
                <div className="text-sm font-normal w-60 md:w-auto">
                  {item.title}
                </div>
                <div className="my-4">
                  <span className="font-light text-sm">{item.body}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Information;
