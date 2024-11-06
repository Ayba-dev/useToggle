import React from 'react';
import './App.css';
import useToggle2 from "./hook/useToggle2";





function App() {

    const  {state, toggle} = useToggle2(['blue', 'orange', 'cyan', 'teal'])


  return (

      <button onClick={toggle}>
        {String(state[0])}
      </button>
  );
}

export default App;
