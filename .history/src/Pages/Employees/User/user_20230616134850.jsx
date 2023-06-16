import { useParams } from "react-router-dom";

function User() {
    const params = useParams();
    const [data, setdata] = useState([]);

    console.log(Object.values(params)[0]);

  
    useEffect(() => {
      axios
        .get(`https://rocky-temple-83495.herokuapp.com/employees/${id}`)
        .then((res) => {
          const persons = res.data;
          setdata(persons);
        });
    }, []);
    return(<>
    sasa</>)
}

export default User;