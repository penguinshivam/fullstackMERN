import './App.css'
import Title  from './Title.jsx';

function Description(){
  return <h3>i am desc</h3>;
}

function App() {

  return(
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ex reiciendis, quo quas, illum voluptatibus magni ad aut quia perferendis amet ab! Doloremque sint praesentium sed molestias at animi veniam?</p>
      <Title/>
      <Description/>
    </>
  )
   
}

export default App
