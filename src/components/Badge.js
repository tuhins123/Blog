import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";

const Badge = ({children, styleinfo}) =>{
    const colorKey = {
        Fashion: "primary",
        Travel: "success",
        Fitness: "danger",
        Food: "warning",
        Tech: "info",
        Sports: "dark"
    }
    return (
        <h5 style={styleinfo}>
            <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
        </h5>
    )
}
export default Badge