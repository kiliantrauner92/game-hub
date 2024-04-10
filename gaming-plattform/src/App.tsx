import { useState, useEffect } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import ExpenseBlock from "./expense-tracker/components/ExpenseBlock";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       var response = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       if (response) {
  //         setUsers(response.data);
  //       }
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
