import { Routes, Route } from 'react-router-dom'
import Black from './components/Black';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Black />}></Route>
    </Routes>
  );
}

export default App;
