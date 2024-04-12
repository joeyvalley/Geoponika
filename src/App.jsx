import { Routes, Route } from 'react-router-dom'
import White from './components/White';
import Black from './components/Black';

function App() {
  return (
    <Routes>
      <Route path="/" element={<White />}></Route>
      <Route path="/black" element={<Black />}></Route>
    </Routes>
  );
}

export default App;
