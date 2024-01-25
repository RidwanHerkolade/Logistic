import React from 'react'
import { TableHeader } from '../../../Constants/Constant'
import { TableData } from '../../../Constants/Constant'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Drivers = () => {
  return (
    <div className='drivers '>
        {/* <AdminCount/> */}

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
                  <div className="dev">
                    <div className="dev__img">
                    <AccountCircleIcon style={{fontSize: "3rem", color: "rgb(54,54,54)"}}/>
                    </div>
                    <h3>{data.name}</h3>
                  </div>
                </td>
                <td>
                  <small className="data__position">nelson02345@ymail.com</small>
                </td>
                <td>
                  <div className="media">
                    0703277838286
                  </div>
                </td>
                {/* <td>
                  <div className="del">
                    <img src={data.delIcon} alt="" className="call" />
                    <img src={data.editIcon} alt="" className="msg" />
                  </div>
                </td> */}
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Drivers