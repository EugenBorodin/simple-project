import React, { useEffect, useState } from 'react';
import style from './Buttons.module.css';

function Buttons(): JSX.Element {
    const [first, changeFirst] = useState<boolean>(false);
    const [second, changeSecond] = useState<boolean>(false);
    const [third, changeThird] = useState<boolean>(false);

    useEffect(() => {
        console.log('use Effect work');
    }, [first, second]);

    useEffect(() => {
        function onScroll(): void {
            console.log('scroll');
        }

        document.addEventListener('scroll', onScroll);

        return (() => {
            document.removeEventListener('scroll', onScroll);
            console.log('unmount');
        });
    }, []);
    return (
        <div className={style.buttons}>
            <button
              type="button"
              style={{ backgroundColor: first ? 'orange' : 'white', width: 100, height: 60 }}
              onClick={() => changeFirst(!first)}
            >
                Первая
            </button>
            <button
              type="button"
              style={{ backgroundColor: second ? 'pink' : 'white', width: 100, height: 60 }}
              onClick={() => changeSecond(!second)}
            >
                Вторая
            </button>
            <button
              type="button"
              style={{ backgroundColor: third ? 'yellow' : 'white', width: 100, height: 60 }}
              onClick={() => changeThird(!third)}
            >
                Третья
            </button>
        </div>
    );
}

export default Buttons;
