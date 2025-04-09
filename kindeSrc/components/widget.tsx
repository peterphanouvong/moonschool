"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
} = {
  loginForm: {
    minWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Bricolage Grotesque",
    fontSize: "32px",
    fontWeight: 400,
    marginBlockEnd: "60px",
  },
  logo: {
    width: "180px",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={{ padding: "2rem" }}>
        <img style={styles.logo} src={"/logo"} />
        <h2 style={styles.heading}>{props.heading}</h2>
        {getKindeWidget()}
      </div>
    </main>
  );
};
