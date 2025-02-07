import { useNavigate } from "react-router-dom";
import classes from "../Styles/Styles.module.css";
import { useEffect } from "react";

export const NoPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [navigate]);
    return (
        <div className={classes.noPage}></div>
    )
}