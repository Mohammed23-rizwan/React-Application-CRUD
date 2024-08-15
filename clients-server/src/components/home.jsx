import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setbooks(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchbooks();
  }, []);

  const handledelete = async (id) => {
    try {
      alert(
        "Sure you Want to delete",
        await axios.delete("http://localhost:8800/books/" + id)
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Wrapper">
      <h1 className="main_heading">Ebook Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} />}
            <h2 className="title">{book.name}</h2>
            <p>{book.desc}</p>
            <div className="bookupdate">
              <button className="update only">
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
              <button
                className="delete only"
                onClick={() => {
                  handledelete(book.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add">
        <Link to="/add" className="newbooks">
          Add New Book
        </Link>
      </button>
    </div>
  );
};

export default Home;
