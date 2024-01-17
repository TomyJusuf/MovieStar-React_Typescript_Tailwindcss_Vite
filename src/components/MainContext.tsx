import { useState } from 'react';
import { movieStars } from '../ts/ts_data/movieStars';
import { MovieTypes } from '../ts/types/movieTS';
import { Anzeige } from './Anzeige';

export default function MainContext() {
  const [showAnzeige, setShowAnzeige] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const openAnzeige = (id: number) => {
    setSelectedId(id);
    setShowAnzeige(true);
  };

  const closeAnzeige = () => {
    setShowAnzeige(false);
    setSelectedId(null);
  };
  return (
    <div className="container  m-auto w-[850px] relative">
      {movieStars.map((hero: MovieTypes) => {
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
                data={movieStars}
                id={selectedId}
                onClose={closeAnzeige}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
