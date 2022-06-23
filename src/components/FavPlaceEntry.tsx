import { FavPlaceProps } from "../interfaces/interfaces";

function FavPlaceEntry(props: FavPlaceProps): JSX.Element {
  return (
    <div key={props.entry_id} className="entry-block">
      <h3> {props.title} </h3>
      <h4>{` ${props.place}, ${props.country} `}</h4>
      <p>{props.summary}</p>
      <img src={props.image} alt={`${props.place}`} style={{ width: 600 }} />
      <div className="interactions-entry-block">
        <iframe
          src={props.maps}
          title={`${props.place} location on Google Maps`}
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

export default FavPlaceEntry;
