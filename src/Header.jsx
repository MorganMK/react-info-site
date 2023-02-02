import reactLogo from './assets/react.svg'
import './style.css'

function Header(){
    return(
        <header>
            <nav className='nav'>
                <img src={reactLogo} alt='React-logo' className='logo'></img>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header