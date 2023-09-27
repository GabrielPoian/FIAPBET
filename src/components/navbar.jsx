"use client"
import { serverLogout } from '@/actions/user'
import { useRouter } from 'next/navigation'


export default function NavBar(){
    const {push} = useRouter()
    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="flex p-4 bg-zinc-950">
        <ul className="flex gap-20">
            <a href='#'>FiapBet</a>
          <li>
          <a href='#'>Favoritos</a>
          </li>
        <button onClick={handleLogout}>logout</button>
        </ul>
      </nav>
    )
}