import CardList from './components/CardList'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen text-center">
      <Navbar />
      <CardList />
    </div>
  )
}
