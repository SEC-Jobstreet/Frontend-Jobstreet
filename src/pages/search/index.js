import SearchHeader from "../../components/searchheader";
import JobListing from "../../components/searchresult";
import { StateProvider } from "../../components/searchresult/context";

function Search() {
  return (
    <div>
      <StateProvider>
        <SearchHeader />
        <JobListing />
      </StateProvider>
    </div>
  );
}

export default Search;
