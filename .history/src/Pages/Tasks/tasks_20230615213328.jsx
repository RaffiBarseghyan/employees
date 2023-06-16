import style from "./tasks.module.scss"



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

        </label>
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          placeholder="Name"
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="description"
          placeholder="Description"
        />

        <input
          className="form-control m-2"
          type="date"
          id="startDate"
          name="startDate"
          placeholder="startDate"
        />

        <input
          className="form-control m-2"
          type="date"
          id="endDate"
          name="endDate"
          placeholder="endDate"
        />

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
