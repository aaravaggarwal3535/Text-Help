import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const [mode, setMode] = useState('light');
  const toogleMode = (color) => {
    setMode(color)
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Help" mode={mode} toogleMode={toogleMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} toogleMode={toogleMode}></TextForm>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
