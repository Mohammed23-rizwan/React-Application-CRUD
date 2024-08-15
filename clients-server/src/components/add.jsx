import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBooks] = useState({
    name: "",
    desc: "",
    cover: "",
  });
  const navigate = useNavigate();

  const handlechange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Form">
      <h2>Add a New Book</h2>
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
          Add New Book
        </button>
      </div>
    </div>
  );
};

export default Add;
