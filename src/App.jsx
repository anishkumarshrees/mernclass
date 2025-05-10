import{BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={  <h1>hello k xa khbr</h1>}/>
    <Route path="/home" element={ <Home/>} />
    <Route path="/contact" element={<Contact/>}/>
    
  
  </Routes>
  </BrowserRouter>
  )
}

export default App
