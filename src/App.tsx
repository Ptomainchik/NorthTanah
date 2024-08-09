
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearPeaks, Robot } from './components/BearPeaks/BearPeaks';

import { NoPage } from './components/NoPage/NoPage';
import { Layout } from './components/Layout/Layout';
import { HistoryOfBearPeaks } from './components/HistoryOfBearPeaks/HistoryOfBearPeaks';

function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<BearPeaks/> } />
          <Route path="history" element={<HistoryOfBearPeaks/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


