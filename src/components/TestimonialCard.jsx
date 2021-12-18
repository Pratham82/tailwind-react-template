export default function TestimonialCard() {
  return (
    <div
      className="bg-slate-100  flex flex-row
      pr-5 mx-5 rounded-lg shadow-lg
    "
    >
      <div className="w-64 rounded-l-lg">
        <img
          src="https://avatars.githubusercontent.com/u/13178080?v=4"
          alt="avatar"
          className="rounded-l-md"
        />
      </div>
      <div className="flex flex-col px-4 py-4">
        <blockquote className="text-left ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </blockquote>
        <figcaption className="text-left pt-8">
          <h1 className="text-blue-500">Prathamesh Mali</h1>
          <h1 className="text-sm">Software Developer, Edstem Technologies</h1>
        </figcaption>
      </div>
    </div>
  )
}
