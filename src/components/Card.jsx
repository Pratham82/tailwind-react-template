import joinName from '../utils/joinName'

export default function Card({
  userData: {
    name,
    picture: { large },
    dob: { age },
    location: { city },
  },
}) {
  return (
    <div className="bg-slate-100 sm:w-2/6 md:w-2/6 lg:w-1/6 flex flex-col justify-center items-center shadow-slate-300 shadow-lg m-4 p-4 rounded-md hover:scale-105 transition ease-in cursor-pointer">
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
    </div>
  )
}
