interface FavPlaceProps {
  title: string;
  place: string;
  country: string;
  maps: string;
  image: {
    src: string;
    alt: string;
  };
  summary: string;
}

function FavPlaceEntry(props: FavPlaceProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
      <img src={props.image.src} alt={props.image.alt} />
      <a href={props.maps}>click me to see where this place is on a map!</a>
      <p>{props.summary}</p>
    </section>
  );
}

export default FavPlaceEntry;
