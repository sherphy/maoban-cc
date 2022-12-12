import { useState } from "react";

const width = 8; 
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red', 
  'yellow'
]

function App() {

  const[currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App
