import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        color: "red",
        display: "flex",
        fontSize: "1.5em",
        alignItems: "center",
        justifyContent: "flex-start",
        flexFlow: "column",
      }}
    >
      <p> Please, fill the previous step before to access this.</p>
      <br />

      <Link
        to="/stepOne"
        style={{
          color: "white",
          background: "black",
          padding: 10,
          border: "none",
          borderRadius: 2,
        }}
      >
        Previous
      </Link>
    </div>
  );
};
