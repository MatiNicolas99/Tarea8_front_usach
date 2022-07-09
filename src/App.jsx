import { Menu } from './componentes/Menu'
import { Slider } from './componentes/Slider'
import { Footer } from './componentes/Footer'
import './index.css'

export const App = () => {
  return (
    <>
        <Menu value = { <i className='fa-solid fa-bars'></i> }/>
        <Slider />
        <Footer />
    </>
  )
}
