import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div><Link to="/">Home</Link> <Link to="/link">LinkTest</Link> <Link to="/counter">Counter</Link></div>
        </div>
    )
}

export default NavBar