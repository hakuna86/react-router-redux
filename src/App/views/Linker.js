import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Linker({ pathname, search, hash }) {
    return (
    <div>
        Linker
        <ul>
        <li><Link to="/link?color=Blue&size=40">with query string</Link></li>
        <li><Link to="/link#lovelove">with hash</Link></li>
        </ul>
        <div>
        pathname: {pathname}
        </div>
        <div>
        search: {search}
        </div>
        <div>
        hash: {hash}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

export default connect(mapStateToProps)(Linker)