import PropTypes from 'prop-types'
import React from 'react'
const Button =({color, text,onClick})=>{
   
    return ()
     <button onClick={onClick} style={{backgroundColor:color
    }} className='btn'>{text}</button>
     )   
    }
    Button.defaultProps={
        color:'steelblue'
    }
    Button.PropTypes={
        text:PropTypes.string,
        color:PropTypes.string,
        onclick:PropTypes.func.isRequired
    }
export default Button