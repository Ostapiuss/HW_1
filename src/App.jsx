import React from "react";

import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransitionHistory from "./components/TransitionHistory";

import user from './mocks/user.json';
import data from './mocks/data.json';
import friends from './mocks/friends.json';
import transactions from './mocks/transactions.json'

export const App = () => {
  return (
    <>
      <div
        className="app-component"
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
            padding: '50px'
          }}
        >
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends} />
          <TransitionHistory items={transactions} />
        </main>
      </div>
    </>
  );
};
