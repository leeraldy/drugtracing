import React, { useState, useEffect } from 'react';
import './App.css';
// import { Drugs } from './drugs';
import Table from './Table';
import axios from 'axios';
const App = () => {
  const [query, setQuery] = useState('');
  // console
  //   .log
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  //   ();

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await axios.get(`http://localhost:5000?q=${query}`);
  //     const res = await axios.post(`http://localhost:5000?q=${query}`);

  //     setData(res.data);
  //   };
  //   console.log('Query length is ....' + query.length);
  //   if (query.length === 5 || query.length > 6) fetchUsers();
  //   // if (query.length > 6) fetchUsers();
  // }, [query]);

  const handleSearch = async () => {
    // const res = await axios.post(`http://localhost:5000?q=${query}`);
    // const res = await axios.get(`http://localhost:5000?q=${query}`);

    // setData(res.data);
    // useEffect(() => {
    const fetchUsers = async () => {
      // const res = await axios.get(`http://localhost:5000?q=${query}`);
      const res = await axios.post(`http://localhost:5000?q=${query}`);

      setData(res.data);
    };
    console.log('Query length is ....' + query.length);
    fetchUsers();
    // if (query.length === 5 || query.length > 6) fetchUsers();
    // if (query.length > 6) fetchUsers();
    // }, [query]);
  };
  // if (query.length === 5 || query.length > 2) fetchUsers();
  // if (query.length > 6) fetchUsers();
  // handleSearch();

  // const search = (data) => {
  //   return data.filter((item) =>
  //     // item.first_name.toLowerCase().includes(query) ||
  //     // item.last_name.toLowerCase().includes(query) ||
  //     // item.email.toLowerCase().includes(query)
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };
  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" id="searchWord" onClick={handleSearch}>
          Search
        </button>

        {/* <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
          ))}
        </ul> */}
        <Table data={data} />
        {data.map((cur) => (
          <div>
            <h1>Drug name: {cur.generic_name}</h1>
            <h2>Drug purpose: {cur.drug_purpose}</h2>
            <h3>Drug usage: {cur.drug_indications_and_usage}</h3>
            <h4>Drug active_ingredient: {cur.drug_active_ingredient}</h4>
            <h4>Drug when_using: {cur.drug_when_using}</h4>
            <h4>Drug stop_use: {cur.drug_stop_use}</h4>
            <h4>
              Drug pregnancy_or_breast_feeding:{' '}
              {cur.drug_pregnancy_or_breast_feeding}
            </h4>
            <p>Drug warning: {cur.drug_warnings}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
