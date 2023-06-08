/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../componets/Navbar/Navbar';

export default function Layout():JSX.Element {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}
