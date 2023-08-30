"use client"
import { StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function CardFilme({filme}) {
    const [favorito,setFavorito] = useState(true)
  return (
    <div
      id="card"
      className="flex flex-col w-40 justify-center items-center m-2 ">
      { favorito?
      <StarIcon onClick={() => setFavorito(false)} className="h-6 w-6 text-blue-500 cursor-pointer" />
      :
      <StarIcon onClick={()=>setFavorito(true)} className="h-6 w-6 text-red-500 cursor-pointer" />
      }
   

   
      <img
        className="rounded"
        src={filme.poster}
        alt=""
      />

      <a href="#" className="text-center bg-pink-700 py-2 w-full rounded my-2 ">
            Jogar
      </a>
    </div>
  );
}
