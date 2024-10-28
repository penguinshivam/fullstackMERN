import './App.css'
import Lottery from './Lottery';
function App() {

  let winCodition=(ticket)=>{
    return ticket[0]===0;
    // return ticket.every((num)=>num===ticket[0]);
    // return sum(ticket)===15;
  }

  return (
    <>
    <Lottery n={3} winCondition={winCodition}/>
    </>
  )
}

export default App
