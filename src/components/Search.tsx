import React, { ReactElement, useState } from "react";
import useFetch from "../hooks/useFetch";
import { SearchResults } from "./";
import "./Search.css";

export default function Search(): ReactElement {
  const [query, setQuery] = useState("Rick Sanchez");
  const [data, loading, setURL] = useFetch();

  return (
    <>
      <div className="searchbar-container">
        <input
          type="search"
          name="query"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setURL(
              `https://rickandmortyapi.com/api/character/?name=${e.target.value}`
            );
          }}
          className="searchbar"
          placeholder="Search"
        />
      </div>
      <div className="search-results-container">
        <h2 className="search-title">Search Results for "{query}"</h2>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <SearchResults data={data} />
            {data.info && (
              <div className="footer">
                {data.info.prev && (
                  <button
                    className="prev-btn"
                    onClick={() => {
                      setURL(data.info.prev);
                    }}
                  >
                    Previous Page
                  </button>
                )}
                {data.info.next && (
                  <button
                    className="next-btn"
                    onClick={() => {
                      setURL(data.info.next);
                    }}
                  >
                    Next Page
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
