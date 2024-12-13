import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks } from './components/Dwarves/BearPeaks/BearPeaks';
import { NoPage } from './components/NoPage/NoPage';
import { HistoryOfBearPeaks } from './components/Dwarves/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { Guilds } from './components/Dwarves/Guilds/Guilds';
import { BlackForest } from './components/Orcs/BlackForest/BlackForest';
import { HomePage } from './components/HomePage/HomePage';
import { HistoryOfBlackForest } from './components/Orcs/HistoryOfBlackForest/HistoryOfBlackForest';
import { Communities } from './components/Orcs/Communities/Communities';
import { DwarvesBattlefieldLwl1 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLwl1';
import { DwarvesBattlefieldLwl3 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLwl3';
import { DwarvesBattlefieldLwl2 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLwl2';
import { OrcsBattlefieldLwl1 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLwl1';
import { OrcsBattlefieldLwl2 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLwl2';
import { OrcsBattlefieldLwl3 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLwl3';
import { OrcsBattlefieldLwl4 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLwl4';


function App() {
  return (

    <BrowserRouter>
    <Routes>
          <Route index element={<HomePage/> } />
          <Route path="dwarves" element={<BearPeaks/>} />
          <Route path="historybp" element={<HistoryOfBearPeaks/>} />
          <Route path="guilds" element={<Guilds/>} />
          <Route path="orcs" element={<BlackForest/>} />
          <Route path="historybf" element={<HistoryOfBlackForest/>} />
          <Route path="communities" element={<Communities/>} />
          <Route path="battlefielddwlwl1" element={<DwarvesBattlefieldLwl1/>}/>
          <Route path="battlefielddwlwl2" element={<DwarvesBattlefieldLwl2/>}/>
          <Route path="battlefielddwlwl3" element={<DwarvesBattlefieldLwl3/>}/>
          <Route path="battlefieldorlwl1" element={<OrcsBattlefieldLwl1/>}/>
          <Route path="battlefieldorlwl2" element={<OrcsBattlefieldLwl2/>}/>
          <Route path="battlefieldorlwl3" element={<OrcsBattlefieldLwl3/>}/>
          <Route path="battlefieldorlwl4" element={<OrcsBattlefieldLwl4/>}/>
          <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


