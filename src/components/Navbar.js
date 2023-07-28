import {Link }from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<div className="menubar">
          <div className="logo">Logo </div>  
          <nav style = {{display:'flex', flexDirection:'column'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
       </div>

    </div>
  )
}

export default Navbar