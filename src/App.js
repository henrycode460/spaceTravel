import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Rocket from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/myProfile';

function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
