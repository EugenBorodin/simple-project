/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import PirateCard from '../PirateCard/PirateCard';
import Pirate from '../../types/Pirate';
import GuestCard from '../GuestCard/GuestCard';

function Parent(): JSX.Element {
  const john: Pirate = {
    name: 'John',
    isDrunk: true,
    ship: 'Black pearl',
    numberOfLegs: 2
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [guest, setGuest] = useState<string>('Igor');
  let guest1 = 'Igor';
  guest1 = 'Semen';
  return (
    <div>
      <h2>Родительский компонент</h2>
      <PirateCard pirate={john} />
      <GuestCard guest={guest} />
    </div>
  );
}

export default Parent;
