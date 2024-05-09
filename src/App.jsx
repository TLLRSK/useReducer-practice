import Form from './components/Form'
import UsersList from './components/UsersList'
import { useAppContext } from './contexts/AppContext'
import './scss/styles.scss'
function App() {
  const {state} = useAppContext();
  return (
    <main className="app">
      <UsersList list={state.usersList} />
      <Form/>
    </main>
  )
}

export default App
