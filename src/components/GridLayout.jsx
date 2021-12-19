export default function GridLayout() {
  return (
    <div className="grid grid-cols-3 gap-2 m-5">
      <div className="h-20 w-full grid place-content-center text-white bg-slate-500 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-700 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-500 rounded-lg">
        1
      </div>

      <div className="h-20 w-full grid place-content-center text-white bg-slate-500 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-700 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-500 rounded-lg">
        1
      </div>

      <div className="h-20 w-full grid place-content-center text-white bg-slate-500 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-700 rounded-lg">
        1
      </div>
      <div className="h-20 w-full grid place-content-center text-white bg-gray-500 rounded-lg">
        1
      </div>

      <div className="h-20 w-full grid place-content-center text-white bg-slate-500 rounded-lg">
        1
      </div>
      <div className="h-20 col-span-2 grid place-content-center text-white bg-gray-700 rounded-lg">
        2
      </div>
      <div className="h-20 col-span-3 grid place-content-center text-white bg-slate-500 rounded-lg">
        3
      </div>
    </div>
  )
}
