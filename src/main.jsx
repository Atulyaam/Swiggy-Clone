import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import FoodOption from './component/FoodOptions.jsx'
import OptionGrociri from './component/Grociri.jsx'
import DineOption from './component/Dineoption.jsx'
import Restaurent from './component/Restaurent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <FoodOption></FoodOption>
    <OptionGrociri></OptionGrociri>
    <DineOption></DineOption>
    <Restaurent></Restaurent>

  </StrictMode>
)
