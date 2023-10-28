import React, { useState, useEffect } from "react";
import "./UserCardOld.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  faCheck,
  faTimes,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import userData from "./IDP1.json"; // Importez le fichier JSON ici

const UserCard = () => {
  const [users, setUsers] = useState([]);
  
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  

  useEffect(() => {
    setUsers(userData.rows);
  }, []);

  const getStatus = (status) => {
    const user = users.find((u) => u.status === status); // Trouver l'utilisateur correspondant au statut
    if (user) {
      const { cause, dateCreated, dateSeen, dateValidated, dateRefused } =
        users;
      switch (status) {
        case "Validé":
          return {
            icon: faCheck,
            textCreated: "Created: ",
            textSeen: "Seen: ",
            textValidated: "Validated: ",
            cause: "",
            dateCreated: dateCreated,
            dateSeen: dateSeen,
            dateValidated: dateValidated,
          };
        case "Refusé":
          return {
            icon: faTimes,
            textCreated: "Created: ",
            textSeen: "Seen: ",
            textRefused: "Refused: ",
            cause: user.cause,
            dateCreated: dateCreated,
            dateSeen: dateSeen,
            dateRefused: dateRefused,
          };
        case "Vu":
          return {
            icon: faEye,
            textCreated: "Created: ",
            textSeen: "Seen: ",
            cause: "",
            dateCreated: dateCreated,
            dateSeen: dateSeen,
          };
        default:
          return {
            icon: faEyeSlash,
            textCreated: "Created: ",
            cause: "",
            dateCreated: dateCreated,
          };
      }
    }
  };

  console.log(selectedParticipants);

  return (
    <div className="Cards">
      <Autocomplete
        className="Autocomplete"
        disablePortal
        id="combo-box-demo"
        options={users.map((user) => user.name)}
        value={null}
        onChange={(e, newValue) => {
          if (newValue) {
            setSelectedParticipants([...selectedParticipants, newValue]);
          }
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {Array(6)
        .fill(null)
        .map((_, index) => {
          const participant = selectedParticipants[index];
          const user = users.find((u) => u.name === participant);
          return (
            <div className="user-card tooltip">
              <div className="inter-card">
                <div className="left-section">
                  {user ? (
                    <>
                      <img className="image" src={user.image} alt={user.name} />
                      <h4 className="name">{user.name}</h4>
                    </>
                  ) : (
                    <>
                      <img className="image" />
                      <h4 className="name">Empty</h4>
                      <div className="image-placeholder"></div>
                    </>
                  )}
                </div>
                <div className="right-section">
                  {user ? (
                    <FontAwesomeIcon
                      icon={getStatus(user.status).icon}
                      className="status-icon"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              {user ? (
                <div className="tooltip-text">
                  <div>
                    {getStatus(user.status).textCreated ? (
                      <div className="custom-white-space">
                        <div className="status bold">
                          {getStatus(user.status).textCreated}
                        </div>
                        <div className="date">{user.dateCreated}</div>
                      </div>
                    ) : null}
                    {getStatus(user.status).textSeen ? (
                      <div className="custom-white-space">
                        <div className="status bold">
                          {getStatus(user.status).textSeen}
                        </div>
                        <div className="date">{user.dateSeen}</div>
                      </div>
                    ) : null}
                    {getStatus(user.status).textValidated ? (
                      <div className="custom-white-space">
                        <div className="status bold">
                          {getStatus(user.status).textValidated}
                        </div>
                        <div className="date">{user.dateValidated}</div>
                      </div>
                    ) : null}
                    {getStatus(user.status).textRefused ? (
                      <div className="custom-white-space">
                        <div className="status bold">
                          {getStatus(user.status).textRefused}
                        </div>
                        <div className="date">{user.dateRefused}</div>
                      </div>
                    ) : null}
                  </div>
                  {user && getStatus(user.status).cause ? (
                    <div className="cause custom-white-space">
                      <div className="bold">Cause: </div>
                      {getStatus(user.status).cause}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default UserCard;
