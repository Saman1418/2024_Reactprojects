import React, { useState } from "react";

const Basicform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const [allData, setallData] = useState([])



    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setallData([...allData, newEntry]);
        console.log(allData);


    }

    const valid = () => {
        if (!email.includes("@,.")) {
            setError("Invalid username")

        }
    }


    const submit = () => {
        if (valid()) {
            alert("form has been submited")

        }


    }


    return (
        <>
            <div className="container App">
                <form action="" onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-control" value={email} type="text" name="email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                        <p>{error}</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" value={password} type="password" name="password" id="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />

                    </div>

                    <button onClick={submit} class="btn btn-primary" type="submit">Login</button>




                </form>
                <br></br>
                <br></br>
                {/* 
                <div>
                    {
                        allData.map((curElement) => {
                            return (
                                <div>
                                    <p>{curElement.email}</p>
                                    <p>{curElement.password}</p>
                                </div>

                            )

                        })
                    }

                </div> */}


                <div>
                    <table class="ui selectable inverted table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Password</th>


                            </tr>
                        </thead>

                        {allData.map((curElement) => {
                            return (

                                <tbody>
                                    <tr>

                                        <td>{curElement.email}</td>
                                        <td>{curElement.password}</td>

                                    </tr>
                                </tbody>

                            )
                        })}

                    </table>




                </div> 

            </div>

        </>
    )
}
export default Basicform;