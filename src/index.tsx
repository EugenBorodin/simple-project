import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './componets/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  // <React.StrictMode>
  //   <Counter />
  //   <Capital />
  //   <Sandwich />
  //   <App />
  //   <Car color="black" brand="BMW" />
  //   <Car color="yellow" brand="Ferrari" />
  //   <Car color="yellow" brand="Submmarine" />
  //   <Car color="grey" brand="Kia" />
  //   <Car color="red" brand="Lamborghini" />
  //   <Car color="violet" brand="Lada" />

  //   <Instrument title="guitar" dateOfManufacturing="2023-02-02" type="strings" />
  //   <ParentFlower />
  //   <Parent />
  //   <Buttons />
  //   <Genderidentification />
  // </React.StrictMode>
);
