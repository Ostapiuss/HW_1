import React from "react";

import Routes from "./components/Routes";
import Navigation from "./components/Navigation";

export const App = () => {
  return (
    <>
      <div
        className="app-component"
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Navigation />
        <main
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Routes />
        </main>
      </div>
    </>
  );
};
