import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100%",
        height: "100vh",
        transition: "background-color 200ms",
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>

      <h1 className="text-white text-center p-5">
        Background Color Changer
      </h1>
    </div>
  )
}

export default App