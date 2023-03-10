import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
// import { useState } from "react";
// import { signUpUser } from "../config/firebasemethods";
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from "../config/firebaseMethods";

function Signup(props) {

    const [model, setModel] = useState({});
    let navigate = useNavigate();

    let createUser = () => {

        signUp(model).then((res) => { console.log(res); navigate('/'); }).catch((err) => { console.log(err); })
        
    }

    return (
        <>
            <Box
                sx={{ height: "80vh" }}
                className="d-flex justify-content-center align-items-center "
            >
                <Box>
                    <Typography variant="h3">Signup</Typography>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, userName: e.target.value })}
                            variant="standard"
                            label="Name"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                            variant="standard"
                            label="Email"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, password: e.target.value })}
                            variant="standard"
                            label="Password"
                            type="password"
                        />
                    </Box>
                    <Box className="p-2">
                        <Button onClick={createUser} variant="contained">
                            Signup
                        </Button>
                        <Link to='/'>
                            <Button /*onClick={signIn}*/ variant="contained" className='ms-2'>
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Signup;