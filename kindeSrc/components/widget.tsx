"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
  logoWrapper: React.CSSProperties;
} = {
  loginForm: {
    minWidth: "543px",
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
    textAlign: "center",
  },
  logo: {
    width: "180px",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div style={styles.logoWrapper}>
        <img style={styles.logo} src={"/logo"} />
      </div>
      <h2 style={styles.heading}>{props.heading}</h2>
      <div style={{ padding: "1.5rem", maxWidth: "483px" }}>
        {getKindeWidget()}
      </div>
    </main>
  );
};
