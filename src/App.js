import React from 'react'
import { Route, Routes} from 'react-router-dom';
import PageHome from './Pages/PageHome';
import PracUno from './Pages/PracUno';
import PracDos from './Pages/PracDos';
import PracTres from './Pages/PracTres';
import PracCuatro from './Pages/PracCuatro';
import PracCinco from './Pages/PracCinco';
import PracSeis from './Pages/PracSeis';
import Posiciones from './Pages/Posiciones';
import DetallesPosicion from './componets/DetallesPosicion';
//import PruebaBoxData from './componets/PruebaBoxData';

const App = () => {
  return (
    <div className='text-center'>
     <Routes>
      <Route path='/' element={ <PageHome /> } />
      <Route path='/PracUno' element={ <PracUno /> } />
      <Route path='/PracDos' element={ <PracDos /> }/>
      <Route path='/PracTres' element={ <PracTres /> }/>
      <Route path='/PracCuatro' element={ <PracCuatro /> }/>
      <Route path='/PracCinco' element={ <PracCinco /> }/>
      <Route path='/PracSeis' element={ <PracSeis /> }/>
      <Route path='/posicion/:position' element={<Posiciones />} >
          <Route path='details' element={<DetallesPosicion />}/>
      </Route>
      <Route path='*' element={<h1>No Funcíona esta Pagína</h1>}/>
     </Routes>
    </div>
  )
}

export default App;

