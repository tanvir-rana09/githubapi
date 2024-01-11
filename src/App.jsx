import { Provider } from 'react-redux'
import './App.css'
import GithubProfile from './components/GithubProfile'
import { store } from './store/Store'

function App() {

  return (
    <Provider store={store}>
      <GithubProfile/>
    </Provider>
  )
}

export default App
