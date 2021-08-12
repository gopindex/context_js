import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoItem from "./RepoItem";
import { useParams } from "react-router-dom";
import "./css/User.css";
export default function User() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getUserandRepos() {
      const username = params.username;

      const [allrepos, myuser] = await Promise.all([
        axios.get(
          `https://api.github.com/users/${username}/repos?page=1&per_page=5`
        ),
        axios.get(`https://api.github.com/users/${username}`),
      ]);

      setRepos(allrepos.data);
      setUser(myuser.data);
    }
    getUserandRepos();

    return () => {
      setRepos([]);
      setUser({});
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="userContainer">
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
        <h2>Public Gists: {user.public_gists}</h2>
        <h2>Location: {user.location}</h2>
        <h2>Public Repos: {user.public_repos}</h2>
      </div>
      <div className="repoContainer">
        {repos?.map((repo) => {
          return (
            <RepoItem
              fullName={repo.full_name}
              link={repo.html_url}
              repoName={repo.name}
            />
          );
        })}
      </div>
    </>
  );
}
