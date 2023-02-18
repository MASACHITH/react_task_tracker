import React from 'react'
import propTypes from "prop-types"
import Button from './Button'

const Header = ({title}) => {

    const onClick =(e)=>{
        console.log(e)
    }


  return (

    <header className='header'>
        <h1>{title}</h1>
        <Button color="#00FF00" text="Add" onClick={onClick}/>
    </header>

  )
}

Header.defaultProps ={
    title :"Task Tracker",
}

Header.propTypes={
    title:propTypes.string.isRequired,
}
// const headingStyle ={
//     color:"red",
//     backgroundColor:"black"
// }
export default Header

