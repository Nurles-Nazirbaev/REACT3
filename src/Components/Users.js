import React from 'react'

const Users = (props) => {
  return (
    <div style={{width:'200px', margin:'auto',border: '1px solid',display: 'flex',textAlign:'center', justifyContent:'space-around', flexDirection:'column'}}>
        <span style={{fontSize:'30px'}}>{props.name}</span>
        <span>{props.email}</span>
        <span>{props.pass}</span>
    </div>
  )
}

export default Users
