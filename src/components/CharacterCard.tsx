import React, { ReactElement } from "react";
import Character from "../interfaces/Character";
import "./CharacterCard.css";

interface Props {
  data: Character;
}

export default function CharacterCard({ data }: Props): ReactElement {
  return (
    <div className="character-card">
      <div className="character-name">{data.name}</div>
      <div className={`character-status ${data.status.toLowerCase()}`}>
        {data.status}
      </div>
      <div className="character-species">Species: {data.species}</div>
      <div className="character-gender">Gender: {data.gender}</div>
      {data.type && <div className="character-type">Type: {data.type}</div>}
      <div className="character-origin">Origin: {data.origin.name}</div>
      <div className="character-last-known-location">
        Last Known Location: {data.location.name}
      </div>
    </div>
  );
}
