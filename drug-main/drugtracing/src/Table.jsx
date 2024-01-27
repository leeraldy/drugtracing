import React from 'react';

const Table = ({ data }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Product ID</th>
            <th>Product NDC</th>
            <th>Generic Name</th>
            <th>Label Name</th>
            <th>Product Type</th>
          </tr>
          {data.map((cur) => (
            <tr key={cur.id}>
              <td>{cur.id}</td>
              <td>{cur.product_ndc}</td>
              <td>{cur.generic_name}</td>
              <td>{cur.labeler_name}</td>
              <td>{cur.product_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
