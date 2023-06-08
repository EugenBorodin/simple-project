import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Counter from '../Counter/Counter';
import Capital from '../Capital/Capital';
import HomePage from '../HomePage/HomePage';
import Sandwich from '../Sandwich/Sandwich';
import Genderidentification from '../Genderidentification/Genderidentification';
import Car from '../Car/Car';
import Instrument from '../Instrument/Instrument';
import ParentFlower from '../Flower/Parent.Flower';
import Parent from '../Parent/Parent';
import Buttons from '../UseEffectExample/Buttons';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* '/' можно писать, а можно и не писать */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/parentflower" element={<ParentFlower />} />
        <Route path="/instrument" element={<Instrument title="guitar" dateOfManufacturing="06.06.2018" type="" />} />
        <Route path="/car" element={<Car brand="BMW" color="RED" />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/gender" element={<Genderidentification />} />
        <Route path="/" element={<HomePage />} />
        {/* '*' - значит любой */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
