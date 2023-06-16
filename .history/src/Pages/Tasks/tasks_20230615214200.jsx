import style from "./tasks.module.scss";

function Tasks() {
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
          
          <input
            className="form-control mt-2"
            type="text"
            id="description"
            name="description"
          />
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
