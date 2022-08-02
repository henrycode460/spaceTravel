import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Rockets from './components/rockets';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
