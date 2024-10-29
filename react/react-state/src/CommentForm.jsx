import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    userName: "",
    rating: 5,
    remarks: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      userName: "",
      rating: 5,
      remarks: "",
    });
  };
  return (
    <div>
      <h4>Give a Comments</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">UserName</label>
        &nbsp;
        <input
          name="userName"
          type="text"
          placeholder="username"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        &nbsp;
        <input
          name="rating"
          type="number"
          placeholder="rating"
          id="rating"
          min={1}
          max={5}
          onChange={handleInputChange}
          value={formData.rating}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        &nbsp;
        <textarea
          name="remarks"
          id="remarks"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <button>Add a comment</button>
      </form>
    </div>
  );
}
