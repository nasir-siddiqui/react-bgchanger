import react from "react";
import { useState } from "react";



const App = () => {

  const [color, setColor] = useState('#ddd')

  const colorValue = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'yellow' },
    { color: 'pink' },
    { color: 'violet' },
  ]

  return (
    <>
      <div className="w-full h-screen duration-200 flex flex-wrap justify-center items-center " style={{ backgroundColor: color }}>

          {colorValue.map((item, index) => (
            <div key={index} >
              <button
                onClick={() => setColor(item.color)}
                className="px-6 py-2 mx-1 border border-white rounded-lg bg-black text-white"
                >{item.color}</button>
            </div>
          ))}



          {/* <button
        onClick={() => setColor('green') }
        className="px-6 py-2 mx-3 border border-white bg-green-500 rounded-lg text-white">Green</button>
        <button
        onClick={() => setColor('blue') }
        className="px-6 py-2 mx-3 border border-white bg-blue-500 rounded-lg text-white">Blue</button> */}
        </div>


    </>
  )
}

export default App;