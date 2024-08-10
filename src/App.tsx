import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks } from './components/BearPeaks/BearPeaks';
import { NoPage } from './components/NoPage/NoPage';
import { Layout } from './components/Layout/Layout';
import { HistoryOfBearPeaks } from './components/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { Guilds } from './components/Guilds/Guilds';
import { Market } from './components/Guilds/Market/Market';

function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<BearPeaks/> } />
          <Route path="history" element={<HistoryOfBearPeaks/>} />
          <Route path="guilds" element={<Guilds/>} />
          <Route path="market" element={<Market/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


