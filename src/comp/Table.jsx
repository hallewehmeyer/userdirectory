import React from 'react'

import data from '../employeeData.json'

export default function Table() {
    return (
        <>
        <button>Sort by First Name</button>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                
                    {data.map(function(employee) {
                        return(
                            <tr>
                                <td><img src={employee.avatar} alt={employee.first_name}/></td>
                                <td>{employee.first_name}</td>
                                <td>{employee.last_name}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.department}</td>
                                <td>{employee.email}</td>
                        
                            </tr>
                            )
                    })}

            
            </tbody>
        </table>
        </>
    )
}
