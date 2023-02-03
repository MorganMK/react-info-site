import reactLogo from '../assets/react.svg'
// import '../style.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='first-item'>
                <img src={reactLogo} alt="React Logo" />
                <h1 className='heading'>ReactFacts</h1>
            </div>
            <p>React Course - Project 1</p>
            
        </nav>
    )
}