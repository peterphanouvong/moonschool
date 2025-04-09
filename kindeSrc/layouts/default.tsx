import React from "react";
import { Header } from "../components/header";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
    background:
      "url(https://asset.kindedemo.com/moonschool/moonschool-bg.jpg) lightgray 50% / cover no-repeat",
  },
  sidePanel: {
    borderRadius: "1rem",
    flex: 1,
    maxWidth: "1024px",
  },
};

export const DefaultLayout = (props: {
  children: React.ReactNode;
  isRegisterPage: boolean;
}) => {
  return (
    <div style={styles.container}>
      <Header page={props.isRegisterPage ? "register" : "login"} />

      <div style={styles.sidePanel}></div>
      {props.children}
    </div>
  );
};
