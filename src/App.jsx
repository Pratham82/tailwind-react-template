import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProfileDetails from './components/ProfileDetails'
import CardList from './components/CardList'
import Navbar from './components/Navbar'
import PageNotFound from './pages/404'
import About from './components/About'

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen text-center">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/profile" element={<ProfileDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
