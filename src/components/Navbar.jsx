import reactLogo from '../assets/react.svg'
// import '../style.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='first-item'>
                <img src={reactLogo} alt="React Logo" />
                <h3 className='heading'>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
            
        </nav>
    )
}