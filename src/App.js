import {useState} from 'react'

import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import CastDetails from './components/CastDetails'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  const [data, setData] = useState([])
  const {id} = useParams()

  return (
    <BrowserRouter>
      <UserContextProvider.Provider value={{data, setData}}>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="top" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="/details/:id" element={<CastDetails palette={id} />} />
        </Routes>
      </UserContextProvider.Provider>
    </BrowserRouter>
  )
}

export default App
