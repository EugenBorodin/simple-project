import React, { useRef, useState } from 'react';
import style from './Genderidentification.module.css';

function Genderidentification(): JSX.Element {
    // const [firstName, setFirstName] = useState<string>('');
    // const [gender, setGender] = useState<string>('');
    // useEffect(() => {
    //     async function loadGender(): Promise<void> {
    //         const response = await fetch(`https://api.genderize.io?name=${firstName}`);
    //         const object = await response.json();
    //         console.log(object);
    //         setGender(object.gender);
    //     }
    //     loadGender();
    // }, [firstName]);
    // return (
    //     <div className={style.genderBox}>
    //         <h2>узнать пол</h2>
    //         <form action="">
    //             <label htmlFor="">Введите свое имя</label>
    //             <input
    //               type="text"
    //               value={firstName}
    //               onChange={(event) => setFirstName(event.target.value)}

    //             />
    //         </form>
    //         <button>Выбрать пол</button>
    //         <div>{gender}</div>
    //     </div>
    // );
    const [gender, setGender] = useState<string>('');
    const nameFromInput: any = useRef();
    function getGender(): void {
        async function loadGender(): Promise<void> {
            const firstName = nameFromInput.current.value;
            const response = await fetch(`https://api.genderize.io?name=${firstName}`);
            const object = await response.json();
            setGender(object.gender);
        }
        loadGender();
    }

    return (
        <div className={style.genderBox}>
            <input
              type="text"
              ref={nameFromInput}
              placeholder="Введите имя на английском"

            />
            <button
              type="button"
              onClick={getGender}
            >
                Выбрать
            </button>
                <div>{gender}</div>

        </div>
    );
}

export default Genderidentification;
