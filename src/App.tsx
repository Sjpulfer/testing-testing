import { useState } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import './App.css'

//Initialize Builder.io with your API key from .env
builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Vite + React + Builder.io</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
     {/* Render Builder.io page content */}
     <BuilderComponent model="page" options={{ url: location.pathname}}
    </>
  );
}

export default App;
