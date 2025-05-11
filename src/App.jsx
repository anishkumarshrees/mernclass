import{BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import learningUseEffect from "./learningUseEffect"
import LearningUseEffect from "./learningUseEffect"


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={  <h1>hello k xa khbr</h1>}/>
    <Route path="/home" element={ <Home/>} />
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/use" element={<LearningUseEffect/>} /> 
    
  
  </Routes>
  </BrowserRouter>
  )
}

export default App
