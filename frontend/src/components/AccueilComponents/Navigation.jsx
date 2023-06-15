// import React from "react";
// import '../assets/Navigation.css';

// const Navigation = () => {
//   return (
//     <div className="navigation">
//       <ul>
//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="logo-apple" />
//             </span>
//             <span className="title">Brand Name</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="home-outline" />
//             </span>
//             <span className="title">Dashboard</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="people-outline" />
//             </span>
//             <span className="title">Customers</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="chatbubble-outline" />
//             </span>
//             <span className="title">Messages</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="help-outline" />
//             </span>
//             <span className="title">Help</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="settings-outline" />
//             </span>
//             <span className="title">Settings</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="lock-closed-outline" />
//             </span>
//             <span className="title">Password</span>
//           </a>
//         </li>

//         <li>
//           <a href="#">
//             <span className="icon">
//               <img name="log-out-outline" />
//             </span>
//             <span className="title">Sign Out</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import "../../assets/Accueil.css";

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const list = [
    "Name",
    "Accueil",
    "Profil",
    "Encadrents",
    "Messages",
    "Archivage",
    "TeamWork",
    "Deconnexion",
  ];

  const handleMouseOver = (index) => {
    setActiveItem(index);
  };

  const icons = ["", "../assets/Images/Icones/1.png", ""];
  // const handleToggleClick = () => {
  //   // toggle logic
  // };

  return (
    <div>
      {/* {<div className="toggle" onClick={handleToggleClick}>
      </div>} */}

      <div className="navigation">
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              className={activeItem === index ? "hovered" : ""}
              onMouseOver={() => handleMouseOver(index)}
            >
              <a href="#">
                <span className="icon">
                  {/* <img name={index} src={icons[index]} /> */}
                </span>
                <span className="title">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Other JSX elements */}
    </div>
  );
};

export default NavigationMenu;
