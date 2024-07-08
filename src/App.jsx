import Enter from './Components/Enter';
import Home from './Components/HomePage/Home';
import Index from './Components/Index';
import Exit from './Components/Exit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="w-full h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="entrada" element={<Enter />} />
          <Route path="saida" element={<Exit />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
