import { useParams } from "react-router-dom";

function User() {
    const params = useParams();

    console.log(Object(params)[0]);
    return(<>
    sasa</>)
}

export default User;