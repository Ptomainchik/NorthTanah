import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks } from './components/Dwarves/BearPeaks/BearPeaks';
import { NoPage } from './components/NoPage/NoPage';
import { HistoryOfBearPeaks } from './components/Dwarves/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { Guilds } from './components/Dwarves/Guilds/Guilds';
import { OrcsKingdom } from './components/Orcs/OrcsKingdom/OrcsKindom';
import { HomePage } from './components/HomePage/HomePage';
import { HistoryOfOrcsKingdom } from './components/Orcs/HistoryOrcs/HistoryOrcs';
import { Layout } from './components/Layout/Layout';
import { Organizations } from './components/Orcs/Organizations/Organizations';


function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/> } />
          <Route path="dwarves" element={<BearPeaks/>} />
          <Route path="historybp" element={<HistoryOfBearPeaks/>} />
          <Route path="guildsbp" element={<Guilds/>} />
          <Route path="orcs" element={<OrcsKingdom/>} />
          <Route path="historyok" element={<HistoryOfOrcsKingdom/>} />
          <Route path="organization" element={<Organizations/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


