import { useState } from "react";


export default function useFavorito(){
    
    const [favorito,setFavorito] = useState(true)


function favoritar(jogo){
    setFavorito(true)
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({media_type: 'movie', media_id: jogo.id, watchlist: true})
    };
    
    fetch('https://api.themoviedb.org/3/account/null/watchlist', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  function desfavoritar(jogo){
    setFavorito(false)
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({media_type: 'movie', media_id: jogo.id, watchlist: false})
    };
    
    fetch('https://api.themoviedb.org/3/account/null/watchlist', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  return { favoritar,desfavoritar}
}