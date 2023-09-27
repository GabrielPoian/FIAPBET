import CardFilme from '@/components/CardFilm'
import Title from '@/components/Title'
import NavBar from '@/components/navbar'
import Image from 'next/image'

async function carregarJogos(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json()
  console.log(json)
  return json.results
}


export default async function Home() {
  


  const jogos= await carregarJogos()
 

  return (
  <>
  <NavBar />

    <Title>Em Alta</Title>

      <section className='flex flex-wrap'>
      {jogos.map((jogo)=> <CardFilme jogo={jogo}/>
        
      )}
      
      </section>

      
    
    <Title>Em Alta Esportes</Title>
  </>  
  )
}