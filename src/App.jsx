import{BrowserRouter,Routes,Route}from "react-router-dom"

function App() {
  const name="anish"

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <h2>This is home page</h2> } />
    <Route path="/about" element={ <h2>This is about page</h2> } />
  </Routes>
  </BrowserRouter>
  )
}

export default App
