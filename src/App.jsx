import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/pages/itemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from  "./components/common/pages/itemListContainer/ItemDetailContainer.jsx";


function App() {

  return  (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;