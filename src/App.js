import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './lib/fontawesome-free-6.1.1-web/css/all.min.css'
import Header from './components/Header'
import Watched from './components/Watched'
import WatchList from './components/WatchList'
import Add from './components/Add'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App
