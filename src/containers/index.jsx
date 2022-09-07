import React, { useState, useEffect } from "react";
import {getUserData, getUserRepo} from "../api";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Repositories from "../components/Repositories";
import Tabs from "../components/Tabs";
import UserInfo from "../components/UserInfo";

function Containers({match}) {
  console.log("match", match)
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const userNameParams = match.params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepos();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  async function fetchRepos() {
    const { data } = await getUserRepo(userNameParams);
    setRepos(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfo user={user} />
            <Tabs repos={repos} user={user} />
            <Repositories repos={repos} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Containers;
