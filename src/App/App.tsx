import { Route, Routes } from 'react-router'

import Default from './Page/Default'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />} />
    </Routes>
  )
}

export default App
