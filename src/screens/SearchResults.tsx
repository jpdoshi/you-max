import { useParams } from "react-router";
import SearchFeed from "../components/SearchFeed";

const SearchResults = ({ isSidebarOpen }: any) => {
  const { query } = useParams();

  return (
    <main className="px-4 md:px-5 mt-[50px]">
      <div className={`pt-3 duration-300 ${isSidebarOpen && "md:ml-[200px]"}`}>
        <div className="mb-4">
          <h2 className="font-extrabold text-2xl">
            Search Results for: <span className="text-primary">{query}</span>{" "}
            Videos
          </h2>
        </div>
        <SearchFeed query={query ?? ""} />
      </div>
    </main>
  );
};

export default SearchResults;
