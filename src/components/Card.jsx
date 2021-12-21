import { useNavigate } from 'react-router-dom'
import joinName from '../utils/joinName'
import Button from './Button'

export default function Card({ userData }) {
  const {
    name,
    picture: { large },
    dob: { age },
    location: { city },
  } = userData
  const navigate = useNavigate()
  return (
    <div className="bg-slate-100 sm:w-2/6 lg:w-1/6 flex flex-col justify-center items-center shadow-slate-300 shadow-lg m-4 p-4 rounded-md hover:scale-105 transition ease-in cursor-pointer">
      <div>
        <img
          src={large}
          alt={joinName(name)}
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="text-base text-slate-600 pt-3">{joinName(name)}</div>
      <div className="text-sm text-slate-500 font-bold"> {city} 📍</div>

      <div className="text-sm text-slate-500 pt-1">
        Age: <span className="font-bold">{age}</span>
      </div>
      <div onClick={() => navigate('/profile', { state: userData })}>
        <Button text="PROFILE" name={'prathamesh'} path="/profile" />
      </div>
    </div>
  )
}
