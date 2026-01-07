import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BottomNav from './components/BottomNav.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <BottomNav />
  </BrowserRouter>,
)
