import Header from './Header'
import Footer from './Footer'
import './App.css' 

function App() {
  return(
    <div className="main">
      <Header/>
      
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
        <li>React is very popular</li>
        <li>I'll' be able to fit in with the cool kids at school</li>
        <li>I will easily transition into mobile development with React Native</li>
        <li>Making money as a web developer is easier when you master React</li>
      </ul>

      <Footer/>
    </div>
  )
}

export default App
