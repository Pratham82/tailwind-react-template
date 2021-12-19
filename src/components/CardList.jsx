import { useState, useEffect } from 'react'
import Card from './Card'
export default function CardList() {
  const URL = 'https://randomuser.me/api/?gender=male&results=10'
  const [data, setData] = useState([])
  const fetchData = async url => {
    const res = await fetch(url)
    const { results } = await res.json()
    setData(results)
  }

  useEffect(() => {
    fetchData(URL)
  }, [])
  return (
    <div className="flex flex-wrap justify-center p-5 mt-8 ">
      {!data
        ? 'Fetching Users...'
        : data.map(user => <Card userData={user} key={user.login.uuid} />)}
    </div>
  )
}
