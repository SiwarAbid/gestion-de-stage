import React from "react";
import "../../assets/Accueil.css";

const Demandes = () => {
  
  const cardHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const statusStyle = {
    padding: "5px 10px",
    borderRadius: "4px",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader" style={cardHeaderStyle}>
          <h2>Demandes de stages</h2>
          <a href="#" className="btn">
            View All
          </a>
        </div>
        {/* className="effect" */}
        <table>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Email</td>
              <td>Téléphone</td>
              <td>Status</td>
              <td></td> {/* Accepter */}
              <td></td> {/* Refuser */}
              <td></td> {/* Archiver + conditions */}
              <td>Remarques</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ben Abid Siwar</td>
              <td>abidsiwar371@gmail.com</td>
              <td>95864057</td>
              <td>
                <span className="status delivered" style={statusStyle}>
                  En cours de stage
                </span>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Demandes;

// import React, { useState } from "react";
// import "../assets/Accueil.css";
// const Demandes = () => {
//   return (
//     <div className="details">
//       <div className="recentOrders">
//         <div className="cardHeader">
//           <h2>Demandes de satges</h2>
//           <a href="#" className="btn">
//             View All
//           </a>
//         </div>

//         <table className="effect">
//           <thead>
//             <tr>
//               <td>Nom</td>
//               <td>Email</td>
//               <td>Téléphone</td>
//               <td>Status</td>
//               <td></td> {/** Accepter **/}
//               <td></td> {/** Refuser **/}
//               <td></td> {/** Archiver + conditions **/}
//               <td>Remarques</td>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>Ben Abid Siwar</td>
//               <td>abidsiwar371@gmail.com</td>
//               <td>95864057</td>
//               <td>
//                 <span className="status delivered">En cours de stage</span>
//               </td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>

//             {/* {<tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>
//                 <span className="status pending">Pending</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Apple Watch</td>
//               <td>$1200</td>
//               <td>Paid</td>
//               <td>
//                 <span className="status return">Return</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Addidas Shoes</td>
//               <td>$620</td>
//               <td>Due</td>
//               <td>
//                 <span className="status inProgress">In Progress</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Star Refrigerator</td>
//               <td>$1200</td>
//               <td>Paid</td>
//               <td>
//                 <span className="status delivered">Delivered</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Dell Laptop</td>
//               <td>$110</td>
//               <td>Due</td>
//               <td>
//                 <span className="status pending">Pending</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Apple Watch</td>
//               <td>$1200</td>
//               <td>Paid</td>
//               <td>
//                 <span className="status return">Return</span>
//               </td>
//             </tr>

//             <tr>
//               <td>Addidas Shoes</td>
//               <td>$620</td>
//               <td>Due</td>
//               <td>
//                 <span className="status inProgress">In Progress</span>
//               </td>
//             </tr>} */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Demandes;
