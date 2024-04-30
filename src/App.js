import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Child from './Components/Child';
import Parent from './Components/Parent';
import Style from '../src/Components/Style.module.css'
import Chef from './Components/Chef/Chef';
import Footer from './Components/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Story from './Components/Story/Story';
import NotFound from './Components/NotFound/NotFound';
import Meals from './Components/Meals/Meals';
import Juice from './Components/Juice/Juice';
import AllMeal from './Components/AllMeal/AllMeal';
import Contact from './Components/Contact/Contact';
import OurChef from './Components/OurChef/OurChef';
import Ingeridents from './Components/Ingeridents/Ingridents';

let routers = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index: true, element:<Home/>},
    {path:'home' , element:<Home/>},
    {path:'meals' , element:<Meals/>},
    {path:'chef' , element:<Chef/>},
    {path:'juice' , element:<Juice/>},
    {path:'allmeal' , element:<AllMeal/>},
    {path:'contact' , element:<Contact/>},
    {path:'ourChef' , element:<OurChef/>},
    {path:'ingeridents' , element:<Ingeridents/>},
    {path:'*' , element:<NotFound/>},
    
  ]},
])

function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  {/* <Story/> */}
  </>
}

export default App;
