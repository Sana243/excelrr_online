import React from 'react'

const InlineStyle = () => {
    let styleObj={
        color:"blue",
        fontSize:"30px"
    }
  return (
    <>
    <div style={{color:"red"}}>InlineStyle</div>
    <div style={styleObj}>InlineStyle</div>
    </>
  )
}

export default InlineStyle