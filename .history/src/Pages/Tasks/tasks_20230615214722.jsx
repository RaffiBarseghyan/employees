import style from "./tasks.module.scss";

function Tasks() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);
  return (
    <>
      <form
        action="https://rocky-temple-83495.herokuapp.com/tasks"
        method="post"
        target="_blank"
        className={`${style.employeeForm} container`}
      >
        <label htmlFor="name">
          Name
          <input
            className="form-control mt-2 "
            type="text"
            id="name"
            name="name"
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            className="form-control mt-2"
          ></textarea>
        </label>

        <label htmlFor="startDate">
          <p>Start Date </p>
          <input
            className="form-control mt-2"
            type="date"
            id="startDate"
            name="startDate"
            placeholder="startDate"
          />
        </label>

        <label htmlFor="endDate">
          <p> End Date</p>
          <input
            className="form-control mt-2"
            type="date"
            id="endDate"
            name="endDate"
            placeholder="endDate"
          />
        </label>
        
        <label htmlFor="employeeId">
          Employee Id
          <select
            name="employeeId"
            id="employeeId"
            className="form-control mt-2"
          ></select>
        </label>

        <input
          className="btn btn-outline-success mt-2"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default Tasks;
