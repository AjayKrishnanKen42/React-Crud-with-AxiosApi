import { Typography } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';

function Desin() {
    return (
        <div>
            <h3 style={{ color: "red", textAlign: "center" }}>           Material ui     </h3>
            <Typography color="red" variant='h3' align="center">         Material ui     </Typography>


            <p style={{ color: "red", textAlign: "center" }}>           Material ui     </p>
            <Typography color='red' align="center">                     Material ui     </Typography>

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

        </div>
    )
}
export default Desin;