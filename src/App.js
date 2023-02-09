import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;