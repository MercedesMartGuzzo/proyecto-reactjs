import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/pages/itemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/common/pages/itemListContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/Context.jsx"
import { Carrito } from "./components/carrito/Carrito.jsx"

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
          
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;