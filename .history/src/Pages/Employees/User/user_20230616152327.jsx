import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const [data, setdata] = useState("");
  const [dataTask, setdataTask] = useState("");

  let id = Object.values(params)[0];

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees/${id}`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/tasks?employeeId=${id}`)
      .then((res) => {
        const persons = res.data[0];
        if (persons !== undefined) {
          setdataTask(persons);
        }
      });
  }, []);

  console.log(dataTask);

  return (
    <>
      <div>
        <h2>Employees</h2>
        <p>Name - {data.name}</p>
        <p>Surname - {data.surname}</p>
        <p>Posirion - {data.position}</p>
      </div>
      {dataTask == "" ? (
        <div>
          <h2>Task</h2>
          <p>Name - {dataTask.name}</p>
          <p>Description - {data.description}</p>
          <p>Start Date - {data.startDate}</p>
          <p>End Date - {data.endDate}</p>
        </div>
      ) : (
        <div>
          <h2>Task</h2>
          <p>Name - {dataTask.name}</p>
          <p>Description - {data.description}</p>
          <p>Start Date - {data.startDate}</p>
          <p>End Date - {data.endDate}</p>
        </div>
      )}
    </>
  );
}

export default User;
