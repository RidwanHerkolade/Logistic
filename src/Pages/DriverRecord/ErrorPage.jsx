import React,{useContext} from "react";
import ErrorIcon from '@mui/icons-material/Error';
import { AddContext } from '../../Context/AddContext';
const ErrorPage = () => {
    const {handleSubmissionError} = useContext(AddContext)
  return (

    <section className="success__session">
      <div className="success__div">
        <div className="check">
          <ErrorIcon
            style={{ fontSize: "5rem", color: "rgb(230,156,49)" }}
          />
        </div>
        <h1>Error !!</h1>
        <p>Your Advert is not successfully placed</p>
        <button className="success__btn" onClick={handleSubmissionError}>
          Done
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
