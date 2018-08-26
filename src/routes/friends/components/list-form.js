import React from 'react';

const ListForm = (props) => {

    let { friend } = props;

    return(
        <div>
            <p style={{backgroundColor: 'gainsboro', width: 300, height: 50, alignSelf: 'center'}}>{friend.name} <span style={{color: 'grey'}} >{friend.handle}</span></p>
        </div>
    )

};

export default ListForm;