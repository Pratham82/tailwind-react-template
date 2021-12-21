import { useLocation } from 'react-router-dom'
import joinName from '../utils/joinName'
export default function ProfileDetails() {
  const {
    state: {
      name,
      picture: { large },
      dob: { age },
      location: { city },
    },
  } = useLocation()
  return (
    <div className="flex justify-start flex-col pt-10 h-screen">
      <div>
        <h1 className="text-2xl text-slate-700 font-bold">Profile Details</h1>
      </div>
      <div className="h-2/6 w-4/6 lg:w-2/6 p-10 m-5 flex border-2 self-center  hover:shadow-sm shadow-lg transition ease-in cursor-pointer rounded-lg">
        <div className="flex-1/2">
          <img
            src={large}
            alt={joinName(name)}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-lg">{joinName(name)}</h1>
          <span className="text-lg font-bold pr-2"> Age:</span>
          <span>{age}</span>
          <br />
          <span className="text-lg font-bold pr-2">City:</span>
          <span>{city}</span>
        </div>
      </div>
    </div>
  )
}
