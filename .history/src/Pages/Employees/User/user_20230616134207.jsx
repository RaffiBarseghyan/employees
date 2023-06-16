function User() {
  const location = useLocation();

  const { from } = location.state;
  console.log(from);
  return <>sasa</>;
}

export default User;
