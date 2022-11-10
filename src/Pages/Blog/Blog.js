import React from "react";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const Blog = () => {
  // Use Title
  useDynamicTitle("Blog");
  return (
    <div>
      {/* 01 */}
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
      </div>

      {/* 02 */}
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">What is JWT?</div>
        <div className="collapse-content">
          <p>
            JSON Web Token is a proposed Internet standard for creating data
            with optional signature and/or optional encryption whose payload
            holds JSON that asserts some number of claims. The tokens are signed
            either using a private secret or a public/private key.{" "}
            <span className="text-orange-600">How does work JWT?</span>{" "}
            <p>
              JSON Web Tokens are an open, standard way for you to represent
              your user's identity securely during a two-party interaction.
              First, the user or client app sends a sign-in request. In this
              step, essentially, a username, password, or any other type of
              sign-in credentials the user provides will travel to the API.
            </p>
          </p>
        </div>
      </div>

      {/* 03 */}
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and Node JS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>

      {/* 04 */}
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
