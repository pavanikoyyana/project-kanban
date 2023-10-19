import React, { useState } from 'react';
import './App.css';

function Header({ groupBy, setGroupBy, sortOption, setSortOption, loadData }) {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleDisplayClick = () => {
    setOptionsVisible(true);
    loadData();
  };

  return (
    <div className="header">
      <button onClick={handleDisplayClick} className="display-button">
        Display 
      </button>
      {optionsVisible && (
        <>
      <div style={{display:"flex",justifyContent:"center"}}>   <div >
            <label>Group By: </label>
            <select value={groupBy} onChange={handleGroupByChange} className='display-buttons'>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Sort By: </label>
            <select className='display-buttons' value={sortOption} onChange={handleSortOptionChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
          </div> 
        </>
      )}
    </div>
  );
}

export default Header;
