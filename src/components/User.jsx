const User = (user) => {
  return (
    // ksdfsdf>?
    <article>
      <ul>
        <li>Email:{user.email} </li>
        <li>Password:{user.password} </li>
        <li>First Name:{user.first_name} </li>
        <li>Last Name:{user.last_name} </li>
      </ul>
      <button>Updated</button>
      <button>Delete</button>
      <hr />
    </article>
  );
};
export default User;
