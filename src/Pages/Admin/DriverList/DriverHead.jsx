import React,{useState} from 'react'

const DriverHead = () => {
    const [search, setSearch] = useState("");
    console.log(search)
    function handleChange(event){
         setSearch(event.target.value);
    };
  return (
  
    <div>
      <div className="employee__divs">
        <div className="board__header">
          <div className="greetings"> DRiVERS</div>
          <div className="search">
            <div className="label">
              <label htmlFor="search">search</label>
              <input type="text" onChange={handleChange} />
              <img src="./img/Search.png" alt="" />
            </div>
            <img src="./img/Logout.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default DriverHead