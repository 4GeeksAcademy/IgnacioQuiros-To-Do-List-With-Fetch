import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar container-fluid d-flex justify-content-between navbar-expand-lg navbar-light bg-primary bg-gradient border-bottom border-5 border-dark py-3">
            <div>
                <h1 className="navbar-brand ms-2 fs-4" >TO-DO List</h1>
            </div>
            <div className="m-2">
                <a href="https://github.com/IgnacioQuiros" className="m-2 text-dark">Github!</a>
                <a href="https://es.linkedin.com/in/ignacio-quir%C3%B3s-sordo-137781184" className="m-2 text-dark">Linkedin!</a>
            </div>
        </nav>
    )
}

export default Navbar;