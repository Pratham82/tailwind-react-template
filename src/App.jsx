import FlexLayout from './components/FlexLayout'
import GridLayout from './components/GridLayout'
import CardList from './components/CardList'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen text-center ">
      <Navbar />
      <CardList />
      {/* <FlexLayout /> */}
      {/* <GridLayout /> */}
      {/* <Carousel /> */}
    </div>
  )
}
