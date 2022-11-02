
import Avatar from '../img/avatar.jpeg';
import Logo from '../img/logo.png';

function Header() {
    return(
    <div className="header">
        <img className="header-left" src={Logo} alt="demo" /> 
        <div className="header-right">
            <div className="header-info">
            <p>Handicrafted by</p>
            <span>An HLS</span>
            </div>
            <img className="header-avatar" src={Avatar} alt="demo" />
        </div>
    </div>
    );
};

export default Header;