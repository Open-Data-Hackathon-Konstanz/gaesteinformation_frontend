import React from 'react';

import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';
import WetterWidget from "./widgets/Wetter";

const App: React.FC = () => {
  return (
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">
            Welcome To React-Bootstrap TypeScript Example
          </h1>
        </Container>
        <h2>Wetter</h2>
        <WetterWidget/>
        <h2>Buttons</h2>
        <ButtonsShowcase />
        <h2>Toasts</h2>
        <ToastsShowcase />
      </Container>
  );
};

export default App;
