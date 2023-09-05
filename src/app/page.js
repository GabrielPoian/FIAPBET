import CardFilme from '@/components/CardFilm'
import Title from '@/components/Title'
import Image from 'next/image'


export default function Home() {

  const jogos=[
    {
      titulo: "Gates Of Olympus",
      poster:"https://d3fwl9ttzumvxe.cloudfront.net/games/29d8559e14cc09c33509d4e455e4ada8.png"
     },{
     titulo: "Wanted",
     poster:"https://d3fwl9ttzumvxe.cloudfront.net/games/5a5d845753ef6830f55330a7986ee11e.png"
     },{
      titulo:"Sweet Bonanza", 
      poster:"https://d3fwl9ttzumvxe.cloudfront.net/games/c77fa594da0490f2c298f9a9f518266b.png"
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
      {jogos.map((jogo)=> <CardFilme jogo={jogo}/>
        
      )}
      
      </section>

      
    
    <Title>Em Alta Esportes</Title>
  </>  
  )
}