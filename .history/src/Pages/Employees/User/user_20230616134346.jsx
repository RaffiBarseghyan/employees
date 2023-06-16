import { useParams } from "react-router-dom";

function User() {
    const params = useParams();

    console.log(Object(params));
    return(<>
    sasa</>)
}

export default User;