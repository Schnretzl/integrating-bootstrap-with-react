import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import BrowseCharacters from './components/BrowseCharacters'
import CharacterDetails from './components/CharacterDetails'
import Comics from './components/Comics'
import NavigationBar from './components/NavigationBar'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseCharacters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
