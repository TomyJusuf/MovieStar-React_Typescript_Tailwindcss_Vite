import Header from './components/Header';
import MainContext from './components/MainContext';

import './index.css';

function App() {
  return (
    <div className=" mx-auto max-w-[850px] h-[50vh] translate-y-36 ">
      <Header />

      <MainContext />
    </div>
  );
}

export default App;
