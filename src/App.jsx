import './App.css'
import Descricao from './components/Descricao/Descricao';
 import {craete BrowserRouter, RouterProvider} from 'react-router-dom;'
import Home from './components/Home/Home';



 import Header from './components/Header/header';
import Main from './components/Main/Main'
import { createBrowserRouter } from 'react-router-dom';
 
function App() {
 
const router = createBrowserRouter([

{
  path: "/",//rota da url
  element: <Home/> //componente a ser exibido
},

{
  path: "/desc-sonicExe",//rota da url
  element: <Descricao/> //componente a ser exibido

},
{ 
path: "/desc-sonicExe2",//rota da url
element: <Descricao2/> //componente a ser exibido
}

])}



  return (
   <div>
      <Header />
      <Main />
  <Descricao />
 </div>
 
  )
}
 
export default App
 