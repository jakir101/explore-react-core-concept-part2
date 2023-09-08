import './App.css'
import Counter from './Countary'
import Friends from './Friends'
import Team from './Team'
import Users from './User'

function App() {
  function handleClick(){
    alert('button click')
  }
  function handleClick2(){
    alert('button 2 click')
  }
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => {alert('btn3')}}>Click me3</button>
    </>
  )
}

export default App
