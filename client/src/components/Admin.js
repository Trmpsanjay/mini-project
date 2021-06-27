import React, {useEffect, useState}  from 'react'
import admpic from "../images/admin.png";
import { Link, useHistory } from "react-router-dom";
import {UserContext} from "../App";
const AdmMain = () => {

    const history = useHistory();
    const [AdmData, setAdmData] = useState('');

    /*const deptMainPage = async () => {
        try {
            const res = await fetch('/getdept', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setDeptData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        deptMainPage();
    }, []);*/
    return (
        <>
            <section className="addDept">
                <div className="container mt-5">
                    <div className="addDept-content">
                        <div className="addDept-form">
                            <h1 className="form-title">Admin</h1>
                            <div className="-image">
                                <figure>
                                    <img src={admpic} alt="admin pic" />
                                </figure>
                            </div>

                            <form method="POST" className="deptAdd-form" id="deptAdd-form">
                                
                                <div className="form-group">
                                <Link to="/ViewStatus" className="btn btn-primary">View Complaint</Link>   
                                </div>

                                 <div className="form-group">
                                 <Link to="/addDepartment" className="btn btn-primary">Add Department</Link>
                                </div>

                                <div className="form-group">
                                 <Link to="/viewDepartment" className="btn btn-primary">View Department</Link>
                                </div>

                                <div className="form-group">
                                 <Link to="/ViewStudent" className="btn btn-primary">View Students</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}

export default AdmMain