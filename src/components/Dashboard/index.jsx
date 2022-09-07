import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Issue from "../../assets/issue.png";

const searchURL = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
function Dashboard() {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        axios.get(searchURL).then((response) => {
            setRepo(response.data.items);
        });
    }, []);
  return (
    <div>
      {repo.map((item) => (
        <div className="dashDetails m-3" >
        <div className="col">
          <img
            src={item.owner.avatar_url}
            className="m-2  dashAvatar "
            width="130"
            height="130"
            alt="User"
          />
          </div>
          <div className="col">
            <div className="dashName"> {item.name} </div>
            <div className="dashDescription">{item.description}</div>
            <div className="dashBottom" >
            <div className="dashCount p-2">
              <i className="fa fa-star p-1" />
              {item.stargazers_count}
            </div>
            <div className="dashIssues p-2"> <img src={Issue} alt="Issues" /> {item.open_issues} </div>
          </div>
          </div>
          <div className="col">
            <div className="dashissue">
              Last Pushed
              {item.updated_at}
              by
              {item.owner.login}{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard