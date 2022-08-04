import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from "./components/header";
import Rockets from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/myProfile';
import { recieveMissions } from './redux/missions/missions';
import {recieveRockerts} from './redux/rockets/rockets'

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(recieveMissions());
  }, []);

  useEffect(() => async () => {
    await dispatch(recieveRockerts());
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets rockerts={state.rockerts} />} />
          <Route path="/missions" element={<Missions missions={state.missions}/>} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
