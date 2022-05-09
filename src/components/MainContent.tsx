import FavPlaceEntry from "./FavPlaceEntry";
import nafplio from "../images/nafplio.jpg"

function MainContent(): JSX.Element {
  return (
    <main>
  <FavPlaceEntry
    title ={"Nea Kios, Greece"}
    place={"Nea Kios"}
    country={"Greece"}
    maps={"https://www.google.com/maps/place/%CE%9D%CE%AD%CE%B1+%CE%9A%CE%AF%CE%BF%CF%82,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1/@37.5885764,22.7397158,16z/data=!3m1!4b1!4m5!3m4!1s0x149ffb0a1fa28e03:0x400bd2ce2b98af0!8m2!3d37.5874845!4d22.7447696"}
    summary ={"This is where I spent most of my summertime until I moved to England."}
    image={{src: nafplio, alt:""}}
  />
  </main>
  );
}
export default MainContent;
