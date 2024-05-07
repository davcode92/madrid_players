import React from 'react'

import CardPlayer from './CardPlayer'



//VOICI LE COMPOSANT RESPONSABLE DE DUPLIQUER(MAP) LES CARTES DES JOUEURS
const PlayerList = ({madrid}) => {
    console.log(madrid);
  return (
    <div className="log">
   {madrid.map((el) => (
    <CardPlayer Object={el}/>
))}
</div> 
)
}

export default PlayerList