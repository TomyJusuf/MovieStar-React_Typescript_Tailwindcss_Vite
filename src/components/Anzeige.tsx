import { MovieTypes } from '../ts/types/movieTS';

interface AnzeigeProps {
  onClose: () => void;
  data: MovieTypes[];
  id: number | null;
}

export const Anzeige = ({ onClose, data, id }: AnzeigeProps) => {
  if (id === null) {
    // Handle the case where id is null
    console.error('ID is null');
    return null;
  }
  const idMovie: number = id - 1;
  const movieData: MovieTypes = data[idMovie];

  const { firstName, lastName, age, height, gender, img } = movieData;
  return (
    <div className="anzeige-box absolute bg-white top-[-35px] w-[650px] ml-32 h-80 rounded-lg  flex flex-wrap shadow-lg shadow-gray-500">
      <button
        onClick={onClose}
        className="w-full text-purple-600 font-bold text-md text-end pr-5 "
      >
        schliessen
      </button>
      <div className="context w-[520px]  ml-16 font-medium  flex justify-between">
        <div className="bodyContect ">
          <h1 className="text-purple-700 font-bold text-2xl mb-12">
            {firstName} {lastName}
          </h1>
          <p className="mt-2">{age} Jahre</p>
          <p>{height}m</p>
          <p>{gender ? 'Männliche' : ''}</p>
        </div>
        <img
          src={img}
          alt=""
          className="w-52 h-56 border-2 border-black bg-auto "
        />
      </div>
    </div>
  );
};
