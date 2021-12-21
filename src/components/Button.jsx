export default function Button({ text }) {
  return (
    <button
      className={`h-10 w-30 bg-blue-500/90 p-5 m-5 grid place-content-center text-white text-sm shadow-lg shadow-blue-500/60 hover:bg-blue-500/80 hover:scale-95 hover:shadow-blue-500/20 transition ease-in cursor-pointer rounded-lg`}
    >
      {text}
    </button>
  )
}
