import { getKindeLoginUrl, getKindeRegisterUrl } from "@kinde/infrastructure";
import React from "react";

export const Header = (props: { page: "login" | "register" }) => {
  return (
    <>
      <style>
        {`
        .header {
          display: flex;
          justify-content: ;
          align-items: center;
          padding: 2rem;
          position: absolute;
          width: 100%;
          top: 0;
          z-index: 999;
        }

        .action-button {
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          font-family: Bricolage Grotesque;
          color: #fff;
        }

        @media only screen and (min-width: 1024px) {
          .logo {
            display: none;
          }
        }
      `}
      </style>
      <div className="header">
        {props.page === "login" ? (
          <a href={getKindeRegisterUrl()} className="action-button">
            SIGN UP
          </a>
        ) : (
          <a href={getKindeLoginUrl()} className="action-button">
            SIGN IN
          </a>
        )}
      </div>
    </>
  );
};
