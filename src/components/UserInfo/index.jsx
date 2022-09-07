import React from "react";

const UserInfo = ({ user }) => (
  <div className="user-infos">
    <img
      src={user.avatar_url}
      className="p-2 avatar"
      width="130"
      height="130"
      alt="User"
    />
    <div className="user">
      <h5>{user.name}</h5>
      <div className="infos">
        {user.location && (
          <div className="info">
            <i className="fa fa-map-marker p-1" />
            <span>{user.location} · </span>
          </div>
        )}
        {user.blog && (
          <div className="info">
            <i className="fa fa-globe p-1" />
            <span>{user.blog} · </span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <i className="fa fa-envelope p-1" />
            <span>{user.email} · </span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <i className="fa fa-twitter p-1" />
            <span>{user.twitter_username} · </span>
            <br />
          </div>
        )}

        {user.followers && (
          <div className="info">
            <i className="fa fa-group" />
            <span>{user.followers} Followers · </span>
          </div>
        )}
        {user.following && (
          <div className="info">
            <i className="fa fa-heart p-1" />
            <span>{user.following} Following </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(UserInfo);
