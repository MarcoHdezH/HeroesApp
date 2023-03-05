import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    
    const navigate = useNavigate();
    const onLogout = () =>{
        navigate('/Login',{
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5 py-3">
            
            <Link className="navbar-brand" to="/"> Asociaciones </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={ ({isActive})=>`nav-item nav-link ${isActive ? 'active':''}` } to="/Marvel"> Marvel </NavLink>

                    <NavLink className="nav-item nav-link" to="/DC"> DC </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                <span className='nav-item nav-link text-primary'>Marco Hernandez</span>
                <button className='nav-item nav-link btn' onClick={ onLogout }>LogOut</button>

                </ul>
            </div>
        </nav>
    )
}