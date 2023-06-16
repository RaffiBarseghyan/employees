function Tasks() {
  return (
    <>
      <form
        action="https://rocky-temple-83495.herokuapp.com/tasks "
        method="post"
        target="_blank"
        className={`${style.employeeForm} container`}
      >
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
          name="surname"
          placeholder="Surname"
        />

        <input
          className="form-control m-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <input
          className="form-control m-2"
          type="text"
          id="position"
          name="position"
          placeholder="Position"
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
