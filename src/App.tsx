import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks } from './components/Dwarves/BearPeaks/BearPeaks';
import { NoPage } from './components/NoPage/NoPage';
import { HistoryOfBearPeaks } from './components/Dwarves/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { Guilds } from './components/Dwarves/Guilds/Guilds';
import { BlackForest } from './components/Orcs/BlackForest/BlackForest';
import { HomePage } from './components/HomePage/HomePage';
import { HistoryOfBlackForest } from './components/Orcs/HistoryOfBlackForest/HistoryOfBlackForest';
import { Layout } from './components/Layout/Layout';
import { Communities } from './components/Orcs/Communities/Communities';


function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/> } />
          <Route path="dwarves" element={<BearPeaks/>} />
          <Route path="historybp" element={<HistoryOfBearPeaks/>} />
          <Route path="guilds" element={<Guilds/>} />
          <Route path="orcs" element={<BlackForest/>} />
          <Route path="historybf" element={<HistoryOfBlackForest/>} />
          <Route path="organizations" element={<Communities/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


