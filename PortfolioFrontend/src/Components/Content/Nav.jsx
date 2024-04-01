import { HashLink as Link } from 'react-router-hash-link';
function Nav(){
    return (
        <div className='nav'>
            <span className='navItem'><Link to="/">Home</Link></span>
            <span className='navItem'><Link to="/about">About</Link></span>
            <span className='navItem'><Link to="/portfolio">Portfolio</Link></span>
        </div>
    )
}

export default Nav;