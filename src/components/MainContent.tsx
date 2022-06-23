import { useEffect, useState } from "react";
import axios from "axios";

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

  function displayEachEntry(entry: EntryInfo) {
    return (
      <div key={entry.entry_id} className="entry-block">
        <h3> {entry.title} </h3>
        <h4>
          {` ${entry.place}, ${entry.country} `}
        </h4>
        <p>{entry.summary}</p>
        <img src={entry.image} alt={`${entry.place}`} style={{width: 600 }} />
        <div className="interactions-entry-block">
        <iframe
          src={entry.maps} 
          title={`${entry.place} location on Google Maps`}
          width="300"
          height="175"
          frameBorder="0"
          style={{ border: 0, padding: 10 }}
          aria-hidden="false"
          tabIndex={0}
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="button-like">Like ♡</button> 
      </div>
      </div>      
    );
  }

  // const myColours = [
  //   "#413e4a", dark grey
  //   "#73626e", greyish purple
  //   "#b38184", sapio milo
  //   "#f0b49e", coral
  //   "#f7e4be"  newspaper yellow
  // ]

  return (
    <>
      <main>{entries?.map(displayEachEntry)}</main>
    </>
  );
}
export default MainContent;
