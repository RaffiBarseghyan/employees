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
            placeholder="Name"
          />
        </label>

        <label htmlFor="">
          Description
          <input
            className="form-control mt-2"
            type="text"
            id="lname"
            name="description"
            placeholder="Description"
          />
        </label>

        <label htmlFor="startDate">
          Start Date
          <input
            className="form-control m-2"
            type="date"
            id="startDate"
            name="startDate"
            placeholder="startDate"
          />
        </label>

        <label htmlFor="endDate">
        End Date
          <input
            className="form-control m-2"
            type="date"
            id="endDate"
            name="endDate"
            placeholder="endDate"
          />
        </label>

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default Tasks;