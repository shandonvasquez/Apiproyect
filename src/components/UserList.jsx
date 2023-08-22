import User from "./User";
const UserList = ({ users }) => {
  return (
    <section>
      {
        // this is the comme
        users.map((user) => (
          // this is the comme
          <User key={user.id} />
        ))
        // this is the comme
      }
    </section>
  );
};
export default UserList;
