import './style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className='nav-box'>
                <li><a href="/" >Home</a></li>
                <li><a href="/owner" >Owner</a></li>
            </ul>
        </div>
    );
}

export default Navbar