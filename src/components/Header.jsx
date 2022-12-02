import '../App.css';
import logo from '../assets/logo.gif'
function Header() {
    return (
        <div className="header flex-flow-row space-between">
            <div className="title">
                <img src={logo} alt="Fashion" />
            </div>
            <div className="hat">
                <span style={{ color: 'gold' }}>Home</span>
                <span>Recipes</span>
                <span>Article</span>
                <span>Contant</span>
                <span>Purchase</span>
            </div>
        </div>
    )
};

export default Header;