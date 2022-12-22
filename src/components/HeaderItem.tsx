import { Link } from "react-router-dom"

interface HeaderItemProps {
    text: string
    route: string
}
let HeaderItem = (props: HeaderItemProps) => {

    return (
        <Link to={props.route} className="bg-yellow w-20 flex justify-center items-center h-5/6 mx-2">
            <p className="w-max">{props.text}</p>
        </Link>
    )
}

export default HeaderItem