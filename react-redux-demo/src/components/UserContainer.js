import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


function UserContainer(props) {
    console.log(props.users);   
    return (
        <div>
            <button onClick={props.update}>Update Users</button>
                {
                    props.users.map(item => <p key={item.id}>{item.name} {item.email}</p>)
                }                 
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        users: state.user.data
    }    
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        update: () => dispatch(fetchUsers())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
