import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
    return (
    <>
  <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.theme} bg-${props.theme} annom-navbar`}>
  <div className="container-fluid">
    <Link className="navbar-brand bold" to="/">LocalHost-NEWS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="bold nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="bold nav-link active dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catogry
          </Link>
          <ul className={`dropdown-menu bg-${props.theme==='dark'?'dark':'light'}`} aria-labelledby="navbarDropdown">
            <li><Link to="/science" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Science</Link></li>
            <li><Link to="/sports" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Sports</Link></li>
            <li><Link to="/technology"  className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Technology</Link></li>          
            <li><Link to="/business" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Business</Link></li>
            <li><Link to="/health" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Health</Link></li>  
            <li><Link to="/entertainment" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>Entertainment</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to="/" className={`${props.theme==='dark'?'dark':'light'} dropdown-item`}>General</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about" tabIndex="-1" aria-disabled="true">About-<b>LHN</b></Link>
        </li>
      </ul>
      <div className={`text-${props.theme==='light'?'dark':'light'}`}>
          <button type="button" className={`btn btn-sm btn-outline-${props.theme==='light'?'dark':'light'}`} onClick={props.toggleMode}>Enable {props.theme==='light'?'Dark':'Light'}Mode</button>
    </div>
    </div>
  </div>
</nav>
    </>
    )
}
