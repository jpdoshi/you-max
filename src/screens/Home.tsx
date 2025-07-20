import Feed from "../components/Feed";

const Home = ({ category, isSidebarOpen }: any) => {
  return (
    <main className="px-4 md:px-5 mt-[50px]">
      <div className={`pt-3 duration-300 ${isSidebarOpen && "md:ml-[200px]"}`}>
        <div className="mb-4">
          <h2 className="font-extrabold text-2xl">
            Latest <span className="text-primary">{category}</span> Videos
          </h2>
          <p className="text-sm font-medium pt-1">
            Explore Videos without distraction with Max focus on what matters
          </p>
        </div>
        <Feed category={category} />
        <div className="h-8" />
      </div>
    </main>
  );
};

export default Home;
