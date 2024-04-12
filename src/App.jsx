import { Routes, Route } from 'react-router-dom'
import Original from './components/Original';
import White from './components/White';
import Black from './components/Black';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Original />}></Route>
      <Route path="/white" element={<White />}></Route>
      <Route path="/black" element={<Black />}></Route>
    </Routes>
  );
}

export default App;
