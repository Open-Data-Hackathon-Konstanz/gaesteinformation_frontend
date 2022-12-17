import React from 'react';

import Container from 'react-bootstrap/Container';

import WetterWidget from "./widgets/Wetter";
import KarteWidget from "./widgets/Karte";

const App: React.FC = () => {
  return (
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">
            Gästeinformation
          </h1>
        </Container>
        <h2>Wetter</h2>
        <WetterWidget/>
        <h2></h2>
        <h2>Karte</h2>
        <KarteWidget />
      </Container>
  );
};

export default App;
