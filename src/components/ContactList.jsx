import React from "react";
import App from "../App";

 const ContactList = () => {
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               // Map over data here
             }
          </tbody>
        </table>
    ); 
}
export default ContactList;