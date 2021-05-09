import React, { useEffect, useState } from "react";
import Brewery from "../components/Brewery";
import SearchBar from "../components/SearchBar";
import searchResults from "../util/Search";

const Index = () => {
  const [data, setData] = useState({
    term: "",
    loading: true,
    filterLocation: "Filter by",
    breweries: [],
  });

  const handleSearch = () => {
    setData({ ...data, loading: true });
    searchResults.searchData(data.term).then((results) => {
      setData({ ...data, loading: false, breweries: results });
    });
  };

  const fetchData = () => {
    searchResults.getData().then((results) => {
      setData({ ...data, loading: false, breweries: results });
    });
  };

  const filterLoc = (e) => {
    setData({ ...data, filterLocation: e.target.value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchBar
        value={data}
        change={(e) => setData({ ...data, term: e.target.value })}
        submit={handleSearch}
        filterLoc={filterLoc}
      />
      <Brewery data={data} />
      {/* <DarkModeSwitch /> */}
    </>
  );
};

export default Index;
