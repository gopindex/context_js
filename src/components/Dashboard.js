import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./css/Dashboard.css";
import axios from "axios";
import Loading from "../images/loading.gif";
export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://api.github.com/users");
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
    return () => {
      // clean up logic
      setUsers(null);
    };
  }, []);

  const handleSearch = async (ev) => {
    ev.preventDefault();

    try {
      if (query === "") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        return;
      }

      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );

      setUsers(res.data.items);
      setLoading(false);
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <h2>Dashboard</h2>
      <div className="searchBar">
        <form onSubmit={handleSearch}>
          <input
            className={error ? "search_input input_error" : "search_input"}
            value={query}
            onChange={(ev) => {
              setQuery(ev.target.value);
              // this.setState({ query: ev.target.value });
            }}
            type="text"
            placeholder="Enter a keyword to search..."
          ></input>
        </form>
      </div>
      <div className="dashboardContainer">
        {loading ? (
          <img className="loadingImage" src={Loading} alt="Loading" />
        ) : (
          users
            ?.filter((user) => {
              return user.login.startsWith(query);
            })
            .map((user) => {
              return (
                <Card
                  avatar_url={user.avatar_url}
                  login={user.login}
                  github_link={user.html_url}
                />
              );
            })
        )}
      </div>
    </>
  );
}
// Dashboard.propTypes = { users: PropTypes.object.isRequired };
