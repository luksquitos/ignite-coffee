import { BrowserRouter } from "react-router-dom"
import { Router } from "../../router"

export function App() {

  return (
    // por que usar o h-screen aqui ?
    <body>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </body>
  )
}

