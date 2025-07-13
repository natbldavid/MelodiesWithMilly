import { useState } from 'react'
import reactLogo  from './assets/react.svg'
import viteLogo   from '/vite.svg'
import bg         from '../../assets/mwmappbackground.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // 1) import via JS so Vite bundles it
    // 2) bg-[#F6EDEE] as fallback, bg-cover/bg-center to fill
    <div
      className="min-h-screen bg-princessBg bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center text-[#97B4EA] mb-6">
          Welcome to the Ultimate Princess Parties
        </h1>

        <div className="card mx-auto max-w-md text-center mb-12">
          <button
            className="px-6 py-3 bg-[#97B4EA] text-white rounded-lg hover:bg-opacity-90"
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-800">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-center text-gray-700">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App