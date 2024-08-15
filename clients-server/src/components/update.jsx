import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBooks] = useState({
    name: "",
    desc: "",
    cover: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const bookid = location.pathname.split("/")[2];

  const handlechange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookid, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Form">
      <h2>Update a book</h2>
      <div className="formset">
        <input
          type="text"
          placeholder="Enter a Title"
          name="name"
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="Enter a Authorname"
          name="desc"
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="Enter a Image Url"
          name="cover"
          onChange={handlechange}
        />
        <button onClick={handleclick} className="onlys">
          Update the Book
        </button>
      </div>
    </div>
  );
};

export default Update;
