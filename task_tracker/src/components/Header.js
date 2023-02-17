import React from 'react'
import propTypes from "prop-types"

const Header = ({title}) => {
  return (
  <header className='container'>
    <h1 style={{color:"red",backgroundColor:'black'}}>{title}</h1>
  </header>
  )
}

Header.defaultProps ={
    title :"task tracker",
}

Header.propTypes={
    title:propTypes.string.isRequired,
}
const headingStyle ={
    color:"red",
    backgroundColor:"black"
}
export default Header

