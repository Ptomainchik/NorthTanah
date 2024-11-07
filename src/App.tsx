import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks } from './components/Dwarves/BearPeaks/BearPeaks';
import { NoPage } from './components/NoPage/NoPage';
import { Layout } from './components/Dwarves/Layout/Layout';
import { HistoryOfBearPeaks } from './components/Dwarves/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { GuildsBp } from './components/Dwarves/Guilds/Guilds';
import { OrcsKingdom } from './components/Orcs/OrcsKingdom/OrcsKindom';
import { GuildsOk } from './components/Orcs/Guilds/Guilds';
import { HomePage } from './components/HomePage/HomePage';
import { HistoryOfOrcsKingdom } from './components/Orcs/HistoryOrcs/HistoryOrcs';

function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/> } />
          <Route path="dwarves" element={<BearPeaks/>} />
          <Route path="historybp" element={<HistoryOfBearPeaks/>} />
          <Route path="guildsbp" element={<GuildsBp/>} />
          <Route path="orcs" element={<OrcsKingdom/>} />
          <Route path="historyok" element={<HistoryOfOrcsKingdom/>} />
          <Route path="guildsok" element={<GuildsOk/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


