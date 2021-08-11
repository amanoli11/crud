import React from 'react'

function Table(props) {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action(Edit/Delete)</th>
            </tr>
        </thead>
    )
}

export default Table