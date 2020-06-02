import React, { ReactElement, useState } from "react";
import Character from "../interfaces/Character";
import { CharacterCard } from "./";

interface Props {
  data: any;
}

export default function SearchResults({ data }: Props): ReactElement {
  return (
    <>
      <div className="search-results">
        {data.results ? (
          data.results.map((i: Character) => <CharacterCard data={i} />)
        ) : (
          <span>No results found :(</span>
        )}

        {/* {data.info.prev && (
          <button className="prev-btn" onClick={() => prevPage(data.info.prev)}>
            Previous Page
          </button>
        )}
        {data.info.next && (
          <button className="next-btn" onClick={() => nextPage(data.info.next)}>
            Next Page
          </button>
        )} */}
      </div>
    </>
  );
}
