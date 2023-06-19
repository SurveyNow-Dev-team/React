import { Link, useParams } from "react-router-dom";

export const Book = () => {
    //useParam hook in react-router-dom used to get param in url
  const { id, name } = useParams();
  return (
    <>
      <h2>Book {id}</h2>
    </>
  );
};
