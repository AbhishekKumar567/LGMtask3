import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Registration } from './component/Registration';

function App() {
  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<Registration/>}/>
    </Routes>
   </Router>

  );
}

export default App;
