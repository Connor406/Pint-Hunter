import React, { useEffect, useState } from "react";
import Brewery from "../components/Brewery";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import SearchBar from "../components/SearchBar";
import searchResults from "../util/Search";

const Index = () => {
  const [data, setData] = useState({
    term: "",
    loading: true,
    breweries: [],
  });

  console.log(data.breweries);

  const handleSearch = () => {
    searchResults.searchData(data.term).then((results) => {
      setData({ ...data, loading: false, breweries: results });
    });
  };

  const fetchData = () => {
    searchResults.getData().then((results) => {
      setData({ ...data, loading: false, breweries: results });
    });
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
      />
      <Brewery searchTerm={data.term} data={data} />
      {/* <DarkModeSwitch /> */}
    </>
  );
};

export default Index;