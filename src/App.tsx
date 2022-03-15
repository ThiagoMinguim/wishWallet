import { Routes, Route } from 'react-router-dom'
import { Logo } from './components/Logo'
import { SectionHeader } from './components/SectionHeader'

import { Home } from './pages/Home'
import { AddToken } from './pages/AddToken'
import { EditToken } from './pages/EditToken'

function App() {
  return (
    <>
      <Logo />
      <SectionHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/edit-token/:id" element={<EditToken />} />
      </Routes>
    </>
  )
}

export default App
