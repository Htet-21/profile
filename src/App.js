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
import Tint from './Tint';
import Thon from './Thon';
import Paing from './paing';
import Zin from './zlm';
import Mono from './mono';
import { Routes, Route } from "react-router-dom";
import Pyei from "./Pyei";
import Saw from "./Saw";

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
        <Route path="tinthtoonaung" element={<Tint />} />
        <Route path="painghtetaung" element={<Paing />} />
        <Route path="zinlinmyat" element={<Zin />} />
        <Route path="mono" element={<Mono />} />
        <Route path="thomas" element={<Pyei />} />
        <Route path="sawthetphyoe" element={<Saw />} />
      </Routes>
    </div>
     
  );
}

export default App;
