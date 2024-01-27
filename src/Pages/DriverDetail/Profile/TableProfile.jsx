import React, { useContext } from "react";
import { TableHeader } from "../../../Constants/Constant";
import { Link } from "react-router-dom";
import { TableData } from "../../../Constants/Constant";
import "./TableProfile.css"
import { AddContext } from "../../../Context/AddContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TableProfile = () => {
  const {handleClickPopup} = useContext(AddContext)
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {TableHeader.map((dataHead) => {
              return [<th>{dataHead.name}</th>];
            })}
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => {
            return [
              <tr key={data.id}>
                <td>
                  <Link className="dev" to="" onClick={handleClickPopup}>
                    <div className="dev__img">
                    <AccountCircleIcon style={{fontSize: "3rem", color: "rgb(54,54,54)"}}/>
                    </div>
                    <h3>{data.name}</h3>
                  </Link>
                </td>
                <td>
                  <small className="data__position">nelson02345@ymail.com</small>
                </td>
                <td>
                  <div className="media">
                    0703277838286
                  </div>
                </td>
              
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableProfile;
