import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Rocket from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/myProfile';
import { recieveMissions } from './redux/missions/missions';
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div>
      <Header />
      <hr />
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
