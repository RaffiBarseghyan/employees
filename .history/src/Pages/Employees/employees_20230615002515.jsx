function Employees() {


    useEffect(() => {
        const fd = new FormData();
        fd.append("id", from);
        axios.post(`http://barmatoys.loc/api/get/confirmget`, fd).then((res) => {
          const persons = res.data;
          setdata(persons.data[0]);
          setReview(persons.review);
          setUser(persons.user);
          setFile(persons.file);
          setColor(persons.data[0].color);
          setDataAll(persons.dataAll);
        });
      }, []);



    return(<>
    Employees
    </>)
}

export default Employees;