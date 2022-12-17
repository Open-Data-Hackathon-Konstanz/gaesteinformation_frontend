import React from 'react';

import Container from 'react-bootstrap/Container';

import WetterWidget from "./widgets/Wetter";
import KarteWidget from "./widgets/Karte";
import EventsWidget from "./widgets/Events";
import SocialWidget from "./widgets/Social";

const App: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const guest_name = queryParams.get("name");
  const no_events = Number(queryParams.get("no_events"));
  const show_wetter = queryParams.get("wetter");
  const show_events = queryParams.get("events");
  const show_social = queryParams.get("social");
  const show_map = queryParams.get("map");
  const show_spiel = queryParams.get("spiel");
  const show_park = queryParams.get("park");
  const show_bus = queryParams.get("bus");


  return (
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">
            Gästeinformation für {guest_name}
          </h1>
        </Container>
          {show_wetter && (<div><h2>Wetter</h2>
              <WetterWidget/></div>)}
          {show_events && (<div><h2>Events</h2>
              <EventsWidget no_events={no_events}/></div>)}
          {show_social && (<div><h2>Social</h2>
              <SocialWidget no_images={5}/></div>)}
          {show_map && (<div><h2>Karte</h2>
              <KarteWidget spiel={show_spiel==="1"} park={show_park==="1"} bus={show_bus==="1"}/></div>)}
      </Container>
  );
};

export default App;
