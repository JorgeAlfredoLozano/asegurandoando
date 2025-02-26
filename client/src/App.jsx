import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import SSNFooter from './components/SSNFooter/SSNFooter.jsx';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
<div className="mt-20">
  <SSNFooter />
</div>

      </div>
    </Router>
  )
}

export default App