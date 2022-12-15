import './App.css';
import Thuta from './Thuta';
import Htet from './Htet';
import Heinhtet from './Heinhtet';
import Kyawt from './Kyawt';
import Sin from './Sin';
import Thin from './Thin';
import Okkar from './Okkar';
import Tinttel from './Tinttel';
import Hsu from './Hsu';
import Thon from './Thon';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
        <Route path="/" element={<Htet />} />
        <Route path="htetarkarkyaw" element={<Htet />} />
        <Route path="kyawtphoosan" element={<Kyawt />} />
        <Route path="thondarylwin" element={<Thon />} />
        <Route path="sinsitsoe" element={<Sin />} />
        <Route path="thinthanttun" element={<Thin />} />
        <Route path="pyaethuta" element={<Thuta />} />
        <Route path="zweyintinttel" element={<Tinttel />} />
        <Route path="hsuthetthetlwin" element={<Hsu />} />
        <Route path="heinhtet" element={<Heinhtet />} />
        <Route path="okkar" element={<Okkar />} />
      </Routes>
    </div>
     
  );
}

export default App;
