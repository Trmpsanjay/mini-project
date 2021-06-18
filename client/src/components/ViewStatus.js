import React, {useEffect, useState} from 'react';

const ViewStatus = () => {

    const [data, setData] = useState([]);


    // GET request function to your Mock API

    const callStatus = () => {

        fetch('/viewStatus', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

            .then(res => res.json())

            .then(json => setData(json));

    }



    // Calling the function on component mount

    useEffect(() => {

        callStatus();

    }, []);



    return (

        <div className="container">

            <h1>View Complaint</h1>

            <table>

                <thead>

                <tr>

                    <th>Student Name</th>

                    <th>Complaint</th>

                    <th>Status</th>

                </tr>

                </thead>

                <tbody>

                    {

                        data.map((data) => (

                            <tr key={data.name}>

                                <td>{data.complaint}</td>

                                <td>{data.complaintStatus}</td>

                                <td/>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}
export default ViewStatus 
