export default function Navbar() {
  const navContents = ['Home', 'About', 'Contacts']
  return (
    <nav className="bg-slate-700 flex text-white justify-between items-center py-3 px-10 m-2 rounded-lg">
      <h1 className="text-xl">Brand</h1>
      <ul className="flex">
        {navContents.map(el => (
          <li className="pr-5 text-sm">{el}</li>
        ))}
      </ul>
    </nav>
  )
}
