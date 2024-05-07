import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PlayerList from "./componants/PlayerList";
import Footer from "./componants/Footer";

function App() {
  const players = [
    {
      id: Math.random(),
      name: "aurélien tchouaméni",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/50573285.png",
    },
    {
      id: Math.random(),
      name: "Ferland Mendy",
      position: "Arrière Gauche",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/84114698.3.png",
    },
    {
      id: Math.random(),
      name: "Federico Valverde ",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/100902349.png",
    },
    {
      id: Math.random(),
      name: "David Alaba",
      position: "Défenseur",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/67306309.1.png",
    },
    {
      id: Math.random(),
      name: "Brahim Díaz",
      position: "Attaquant",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/50563058.png",
    },

    {
      id: Math.random(),
      name: "Eduardo Camavinga",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/67357107.png",
    },
    {
      id: Math.random(),
      name: "Lucas Vázquez",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/67317482.1.png",
    },
    {
      id: Math.random(),
      name: "Jude Bellingham",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/117692883.png",
    },
    {
      id: Math.random(),
      name: "Toni Kroos",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/67291385.4.png",
    },
    {
      id: Math.random(),
      name: "Rodrygo",
      position: "Attaquant",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/100907108.png",
    },
    {
      id: Math.random(),
      name: "Luka Modrić",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/134394731.1.png",
    },
    {
      id: Math.random(),
      name: "Arda Güler",
      position: "Milieu de terrain",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/50595957.1.png",
    },
    {
      id: Math.random(),
      name: "Vinicius Júnior",
      position: "Attaquant",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/84124874.png",
    },
    {
      id: Math.random(),
      name: "Éder Militão",
      position: "Défenseur",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/67348994.png",
    },
    {
      id: Math.random(),
      name: "Dani Carvajal",
      position: "Arrière Droit",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/50536611.2.png",
    },
    {
      id: Math.random(),
      name: "Antonio Rüdiger",
      position: "Défenseur",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/50537100.1.png",
    },
    {
      id: Math.random(),
      name: "Dani Ceballos",
      position: "Milieu de terrain",
      imgURL:"https://game-assets.fut.gg/2024/cards/222509.5.png",
    },
    {
      id: Math.random(),
      name: "Joselu",
      position: "Attaquant",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/173608.6.png",
    },
    {
      id: Math.random(),
      name: "Nacho Fernández ",
      position: "Défenseur",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/200724.6.png",
    },
    {
      id: Math.random(),
      name: "ÁLVARO RODRÍGUEZ",
      position: "Attaquant",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/futgg-cards/272445.2.webp?quality=60&width=300",
    },
    {
      id: Math.random(),
      name: "Fran García",
      position: "Défenseur",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/246606.6.png",
    },
    {
      id: Math.random(),
      name: "Thibaut Courtois",
      position: "Gardien",
      imgURL:"https://game-assets.fut.gg/2024/cards/50523767.2.png",
    },
    {
      id: Math.random(),
      name: "Andriy Lunin ",
      position: "Gardien",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/243952.4.png",
    },
   
  
    {
      id: Math.random(),
      name: "Kepa Arrizabalaga",
      position: "Gardien",
      imgURL:
        "https://game-assets.fut.gg/2024/cards/206585.6.png",
    },
    
   
    
  ];

  return (
    <div className="App">
      
      <h1>CARACTERISTIQUES DES JOUEURS DU REAL MADRID FC SAISON 2023/2024</h1>
      
      <img id="rmd" src={"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"} />
     
      

      <PlayerList madrid={players} />
      <Footer />
    </div>
  );
}

export default App;
