import { BackButton } from "../Button/BackButton/BackButton"
import { HomeButton } from "../Button/HomeButton/HomeButton"

export const NoPage = () => {
    return (<div>
        <div><HomeButton/>Error<BackButton/></div>
        <div>404 Error</div>
        </div>
    )
}