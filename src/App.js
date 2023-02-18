import React, {useState} from "react"
import Header from "./components/Header"
import Body from "./components/Body"


function App() {
  const [mode, setMode] = useState(true)

  const isMobile = window.innerWidth < 1024;
  


  function modeHandle () {
    setMode(!mode)

}
  return (
    <div className="App">
      <Header mode={mode} isMobile={isMobile} modeHandle={modeHandle} />
      <Body mode={mode} isMobile={isMobile} modeHandle={modeHandle} />
    </div>
  );
}

export default App;
