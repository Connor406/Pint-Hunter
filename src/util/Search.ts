const searchResults = {
  searchData(searchTerm: string) {
    return fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`
    ).then((response) => {
      return response.json();
    });
  },

  getData() {
    return fetch("https://api.openbrewerydb.org/breweries").then((response) => {
      return response.json();
    });
  },
};

export default searchResults;
