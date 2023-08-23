import Title from '@/components/Title'
import Image from 'next/image'


export default function Home() {
  return (
  <>
    <nav className="flex p-4 bg-zinc-950">
      <ul className="flex gap-20">
          <a href='#'>FiapBet</a>
        <li>
        <a href='#'>Favoritos</a>
        </li>
      </ul>
    </nav>
    <Title>Em Alta</Title>
    <div id='card' className='flex flex-col w-40 justify-center items-center m-2 '>
      <img className='rounded' src="https://place-hold.it/150x220/666/fff" alt="" />
      
        <a href='#' className='text-center bg-pink-700 py-2 w-full rounded my-2 ' >Jogar</a>
      
    </div>
    
      
    
    <Title>Em Alta Esportes</Title>
  </>  
  )
}