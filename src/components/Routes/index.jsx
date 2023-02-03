import React from 'react';

import { Routes, Route } from  'react-router-dom';

import Profile from "../Profile";
import Statistics from "../Statistics";
import FriendList from "../FriendList";
import TransitionHistory from "../TransitionHistory";

import user from '../../mocks/user.json';
import data from '../../mocks/data.json';
import friends from '../../mocks/friends.json';
import transactions from '../../mocks/transactions.json';

const RoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }/>
      <Route path="/statistic" element={
        <Statistics title="Upload stats" stats={data} />
      }/>
      <Route path="/friends" element={
        <FriendList friends={friends} />
      }/>
      <Route path="/transition" element={
        <TransitionHistory items={transactions} />
      }/>
    </Routes>
  )
}

export default RoutesNav;
