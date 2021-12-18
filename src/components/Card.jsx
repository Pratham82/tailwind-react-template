export default function Card() {
  return (
    <div
      className="bg-slate-100  flex flex-row
      pr-5 mx-5 rounded-lg shadow-lg
    "
    >
      <img
        src="https://avatars.githubusercontent.com/u/13178080?v=4"
        alt=""
        className="w-1/6 h-1/6 rounded-l-lg"
      />
      <div className="flex flex-col px-4 py-4">
        <blockquote className="text-left ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </blockquote>
        <figcaption className="text-left pt-2">
          <h1 className="text-blue-500">Prathamesh Mali</h1>
          <h1 className="text-sm">Software Developer, Edstem Technologies</h1>
        </figcaption>
      </div>
    </div>
  )
}
