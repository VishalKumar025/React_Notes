import React from 'react'

const College = ({ names }) => {
    return (
        <div>
            <hr />
            {/* {names}   //it will print all of element */}
            {names[2]}
        </div>
    )
}

export default College
