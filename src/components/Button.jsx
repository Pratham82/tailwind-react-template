export default function Button({ text, bgColor, textColor }) {
  return (
    <div
      className={`h-10 w-30 bg-${bgColor}-500/90 p-5 m-5 grid place-content-center text-${textColor} text-sm shadow-lg shadow-${bgColor}-500/60 hover:bg-${bgColor}-500/80 hover:scale-95 hover:shadow-blue-500/20 transition ease-in cursor-pointer rounded-lg`}
    >
      {text}
    </div>
  )
}
