import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Rockets from './components/rockets';
import Missions from './components/missions';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
