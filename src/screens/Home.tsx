import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useSidebar from "../hooks/useSidebar";
import Feed from "../components/Feed";

const Home = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div>
      <Navbar isSidebarOpen={isOpen} setIsSidebarOpen={setIsOpen} />
      <Sidebar isSidebarOpen={isOpen} />

      {/* Content */}
      <main className="px-4 md:px-5 mt-[50px]">
        <div className={`pt-2 duration-300`}>
          <Feed />
        </div>
      </main>
    </div>
  );
};

export default Home;
