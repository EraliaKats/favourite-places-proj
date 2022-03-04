interface FavPlaceProps {
  title: string;
  body: string;
}

function FavPlaceEntry(props: FavPlaceProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </section>
  );
}

export default FavPlaceEntry;
