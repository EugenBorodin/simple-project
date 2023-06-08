import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <NavLink
        to="Main"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Главная Страница
      </NavLink>

      <NavLink
        to="buttons"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Buttons
      </NavLink>

      <NavLink
        to="parent"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Пират
      </NavLink>

      <NavLink
        to="parentflower"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Parent Flower
      </NavLink>

      <NavLink
        to="instrument"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Instrument
      </NavLink>

      <NavLink
        to="Car"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Car
      </NavLink>

      <NavLink
        to="Sandwich"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Restoran Sandwich
      </NavLink>

      <NavLink
        to="counter"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Counter
      </NavLink>

      <NavLink
        to="capital"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >Столица
      </NavLink>

      <NavLink
        to="gender"
        className="navlink"
        // style={{
        //   textDecoration: 'none',
        //   color: 'grey',
        //   fontWeight: 'bold',
        //   margin: '5px',
        //   padding: '5px',
        //   display: 'inline-block',
        //   border: '2px solid black',
        //   borderRadius: '10px'
        // }}
      >
        Определитель пола
      </NavLink>
    </nav>
  );
}
