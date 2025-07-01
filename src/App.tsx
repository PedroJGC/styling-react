import { Button } from './components/button'

function App() {
  return (
    <div>
      <Button name="Criar" onClick={() => alert('Criar')} />
      <Button name="Editar" />
      <Button name="Remover" />
    </div>
  )
}

export default App
