import {useHistory} from 'react-router-dom'

const Navbar = ({ changeToHome }) => {
// const history = useHistory()
    function logOut() {
        alert('Goodbye')
        localStorage.clear()
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button onClick={changeToHome} className="navbar-brand">Home</button>
                <button onClick={logOut} type="button" className="btn btn-secondary">Logout</button>
            </div>

            
        </nav>
    )
}

export default Navbar