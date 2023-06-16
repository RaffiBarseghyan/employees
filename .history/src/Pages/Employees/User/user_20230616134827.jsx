import { useParams } from "react-router-dom";

function User() {
    const params = useParams();

    console.log(Object.values(params)[0]);

    const [data, setdata] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`https://rocky-temple-83495.herokuapp.com/employees`)
        .then((res) => {
          const persons = res.data;
          setdata(persons);
        });
    }, []);
    return(<>
    sasa</>)
}

export default User;