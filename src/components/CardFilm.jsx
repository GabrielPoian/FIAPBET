"use client"
import useFavorito from '@/hooks/filmes'
import { StarIcon } from '@heroicons/react/24/solid'
import { Goal } from 'lucide'
import { useState } from 'react'


export default function CardFilme({jogo}) {
  const{ favorito,desfavoritar,favoritar} = useFavorito()
    
    const url_image = `https://image.tmdb.org/t/p/w200/${jogo.poster_path}`
  
   
    
    return (
    <div
      id="card"
      className="flex flex-col w-40 justify-center items-center m-2 ">
      { favorito?
      <StarIcon onClick={() => desfavoritar(jogo)} id="favoritoBt"className="h-6 w-6 text-trasparent cursor-pointer" />
      :
      <StarIcon onClick={() => favoritar(jogo)} id="favoritoBt"className="h-6 w-6 text-yellow-300 cursor-pointer" />
      }
   
      <img  id ="poster"className="rounded w-full h-"src={url_image} alt="Gates Of Olypus"/>
      <span id = "titulo" className='font-bold text-center line-clamp-1'>
                {jogo.title}
            </span> 

      <a id="botao"  href="#" className="text-center font-bold bg-pink-700 py-2 w-full rounded my-2 ">
            Jogar
      </a>
      
    </div>
  );
}

