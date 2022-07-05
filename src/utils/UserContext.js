import { Text } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { checkAuth } from "../api";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  const { data, isLoading, isError } = useQuery(
    "currentUser",
    () => checkAuth({ token })
  );

  useEffect(() => {
    if (token) {
      if (data) {
        if (data.user) {
          setUser(data);
        }
      } else setUser(null);
    } else {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
  }, [data, token]);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>An error has occurred</Text>;

  return (
    <UserContext.Provider value={user}>
      {user ? (
        children
      ) : window.location.pathname !== "/login" ? (
        <Text>You are not logged in</Text>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
