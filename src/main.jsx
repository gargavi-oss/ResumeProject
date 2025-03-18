import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import {  RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import TemplateTwo from './templates/TemplateTwo';
import Templateone from './templates/Templateone';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path="TemplateOne" element={<Templateone/>}/>
      <Route path='TemplateTwo' element={<TemplateTwo/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
