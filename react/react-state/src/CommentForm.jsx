import { useState } from "react";
import {useFormik} from "formik";


const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }
  
    return errors;
  };

export default function CommentsForm({addNewComment}) {
//   let [formData, setFormData] = useState({
//     userName: "",
//     rating: 5,
//     remarks: "",
//   });

  const formik = useFormik({
    initialValues: {
        userName: "",
        rating: 5,
        remarks: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  

//   let handleInputChange = (event) => {
//     setFormData((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };
//   let handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     addNewComment(formData);
//     setFormData({
//       userName: "",
//       rating: 5,
//       remarks: "",
//     });
//   };
  return (
    <div>
      <h4>Give a Comments</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">UserName</label>
        &nbsp;
        <input
          name="userName"
          type="text"
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.errors.userName ? <p style={{color:"red"}}>{formik.errors.userName}</p> : null}
        <label htmlFor="rating">Rating</label>
        &nbsp;
        <input
          name="rating"
          type="number"
          placeholder="rating"
          id="rating"
          min={1}
          max={5}
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        &nbsp;
        <textarea
          name="remarks"
          id="remarks"
          placeholder="add few remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>
        <br />
        <br />
        <button type="submit">Add a comment</button>
      </form>
    </div>
  );
}
