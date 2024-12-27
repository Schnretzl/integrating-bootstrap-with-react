import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import BrowseCharacters from './BrowseCharacters'
import CharacterDetails from './CharacterDetails'
import Comics from './Comics'
import NavigationBar from './NavigationBar'
import NotFound from './NotFound'

// Task 3: Setting Up Routes
//     In your application's main file, set up routes using BrowserRouter and Route from React Router. Assign each route to the corresponding component.

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
