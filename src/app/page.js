import CardFilme from '@/components/CardFilm'
import Title from '@/components/Title'
import Image from 'next/image'


export default function Home() {

  const jogos=[
    {
      poster:"https://apksos.com/storage/images/app/gatesofolympus/demoyuk/app.gatesofolympus.demoyuk_1.png"
     },{
     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimU1pCkPmF_NmX5giN2IIY61G17beOPeCpXjnbUnOVxqSfap1yZcNHkiZbZeTKHFYAlc&usqp=CAU"
     }

  ]
  
 
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

      <section className='flex flex-wrap'>
      {jogos.map((filme)=> <CardFilme filme={filme}/>
        
      )}
      
      </section>

      
    
    <Title>Em Alta Esportes</Title>
  </>  
  )
}