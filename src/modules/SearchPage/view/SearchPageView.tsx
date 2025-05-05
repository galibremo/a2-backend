import Knowledge from "@/modules/GLOBAL/Home/Knowledge";
import SearchButton from "@/modules/GLOBAL/Search/SearchButton";
import SearchItems from "@/modules/GLOBAL/Search/SearchItems";
import React from "react";

const SearchPageView = () => {
  return (
    <div>
      <SearchButton />
      <SearchItems />
      <Knowledge />
    </div>
  );
};

export default SearchPageView;
