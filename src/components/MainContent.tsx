import { useEffect, useState } from "react";
import axios from "axios";
import FavPlaceEntry from "./FavPlaceEntry";

function MainContent(): JSX.Element {
  interface EntryInfo {
    entry_id: number;
    title: string;
    place: string;
    country: string;
    maps: string;
    summary: string;
    image: string;
  }

  const [entries, setEntries] = useState<EntryInfo[]>();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get("http://localhost:4000/");
      setEntries(response.data);
    };

    fetchEntries();
  }, []);

  // const myColours = [
  //   "#413e4a", dark grey
  //   "#73626e", greyish purple
  //   "#b38184", sapio milo
  //   "#f0b49e", coral
  //   "#f7e4be"  newspaper yellow
  // ]

  return (
    <>
      <main>
        {entries?.map((entry: EntryInfo) => (
          <FavPlaceEntry
            entry_id={entry.entry_id}
            title={entry.title}
            place={entry.place}
            country={entry.country}
            summary={entry.summary}
            image={entry.image}
            maps={entry.maps}
            key={entry.entry_id}
          />
        ))}
      </main>
    </>
  );
}
export default MainContent;
