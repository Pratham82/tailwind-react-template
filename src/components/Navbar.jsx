import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const navContents = [
    { title: 'Users list', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contacts', path: '/contacts' },
  ]
  return (
    <nav className="bg-slate-700 flex text-white justify-around items-center py-3 px-10">
      <h1 className="text-xl cursor-pointer" onClick={() => navigate('/')}>
        Tailwind x React
      </h1>
      <ul className="flex">
        {navContents.map((el, i) => (
          <li
            onClick={() => navigate(`${el.path}`)}
            key={i}
            className="pr-5 text-sm cursor-pointer"
          >
            {el.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}
