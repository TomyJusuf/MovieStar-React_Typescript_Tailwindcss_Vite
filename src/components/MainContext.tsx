import { useState } from 'react';

import { Anzeige } from './Anzeige';
import { movieStars } from '../ts/ts_data/movieStars';
import { MovieTypes } from '../ts/types/movieTS';

export default function MainContext() {
  const [showAnzeige, setShowAnzeige] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const movieList: MovieTypes[] = movieStars;

  const [input, setInput] = useState<MovieTypes>({
    id: movieStars.length + 1,
    firstName: '',
    lastName: '',
    age: 0,
    height: 0,
    gender: '',
    // Add other properties as needed
  });

  const openAnzeige = (id: number): void => {
    setSelectedId(id);
    setShowAnzeige(true);
  };

  const closeAnzeige = (): void => {
    setShowAnzeige(false);
    setSelectedId(null);
  };

  const log = () => {
    console.log(movieList);
    console.log(input.id);
    setInput(
      (prevInput): MovieTypes => ({ ...prevInput, id: prevInput.id + 1 })
    );
    movieList.push(input);

    // Clear the input fields after pushing the data
    setInput(
      (prevInput): MovieTypes => ({
        ...prevInput,
        id: movieStars.length + 1, // Incrementing the ID for the next entry
        firstName: '',
        lastName: '',
        age: 0,
        height: 0,
        gender: '',
        // Add other properties as needed
      })
    );
  };
  return (
    <>
      <div
        className="container  m-auto w-[850px] py-5 bg-slate-300  relative flex  flex-wrap gap-x-2 gap-y-2 justify-center"
        key={0}
      >
        <div className="flex justify-between items-center w-1/4 ">
          <label htmlFor="" className="">
            first ame:
          </label>
          <input
            type="text"
            value={input.firstName}
            className="w-32 h-10 border-2 border-slate-400 placeholder:text-center text-center "
            onChange={(e) =>
              setInput(
                (prev): MovieTypes => ({
                  ...prev,
                  firstName: e.target.value,
                })
              )
            }
          />{' '}
        </div>
        <div className="flex justify-between items-center w-1/4 ">
          <label htmlFor="">Last name:</label>
          <input
            type="text"
            value={input.lastName}
            className="w-32 h-10 border-2 border-slate-400 placeholder:text-center text-center  "
            onChange={(e) =>
              setInput(
                (prev): MovieTypes => ({ ...prev, lastName: e.target.value })
              )
            }
          />{' '}
        </div>
        <div className="flex justify-between items-center w-2/2 ">
          <label htmlFor="" className="">
            Age:
          </label>
          <input
            type="text"
            value={input.age}
            className="w-32 h-10 border-2 border-slate-400 placeholder:text-center text-center "
            onChange={(e) =>
              setInput(
                (prev): MovieTypes => ({
                  ...prev,
                  age: Number.parseInt(e.target.value),
                })
              )
            }
          />
        </div>
        <div className="flex justify-between items-center w-1/4 ">
          <label htmlFor="">Height:</label>
          <input
            type="text"
            value={input.height}
            className="w-32 h-10 border-2 border-slate-400 placeholder:text-center text-center"
            onChange={(e) =>
              setInput(
                (prev): MovieTypes => ({
                  ...prev,
                  height: Number.parseInt(e.target.value),
                })
              )
            }
          />{' '}
        </div>
        <div className="flex justify-between items-center w-1/4 ">
          <label htmlFor="">Gender:</label>
          <input
            type="text"
            value={input.gender}
            className="w-32 h-10 border-2 border-slate-400 placeholder:text-center text-center"
            onChange={(e) =>
              setInput(
                (prev): MovieTypes => ({
                  ...prev,
                  gender: e.target.value,
                })
              )
            }
          />{' '}
        </div>
        <button
          type="button"
          className="bg-fuchsia-700 text-white text-center font-bold  w-[140px] rounded-3xl uppercase py-2  mt-[10px] "
          onClick={() => log()}
        >
          hinzufügen
        </button>
      </div>
      {movieList.map((hero: MovieTypes) => {
        const { id, firstName, lastName, age, height, gender } = hero;
        return (
          <div className="box flex flex-wrap my-3 " data-id={id} key={id}>
            <h1 className="w-10/12 px-10 py-4 bg-neutral-300 rounded-l-3xl font-medium ">
              {firstName} {lastName} / {age} Jahre / {height}m {''}
              {gender ? `/ Männliche` : ''}
            </h1>
            <button
              type="button"
              onClick={() => openAnzeige(id)}
              className="bg-fuchsia-700 text-white text-center font-bold  w-2/12 rounded-r-3xl uppercase"
            >
              Anzeigen
            </button>
            {showAnzeige && (
              <Anzeige
                data={movieList}
                id={selectedId}
                onClose={closeAnzeige}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
