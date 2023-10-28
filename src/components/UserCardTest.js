import React, { useState, useEffect } from "react";
import "./UserCardTest.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { InputAdornment, ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";

import {
  faCircleCheck,
  faCircleXmark,
  faEye,
  faEyeSlash,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import userData from "./IDP1.json"; // Importez le fichier JSON ici
import { styled } from "@mui/system";

const StyledAutocomplete = styled(Autocomplete)(({ theme, isReadOnly }) => {
  return {
    "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
      width: "50vw",
      height: "3.5em",
      paddingRight: "9px !important",
      "& button": {
        order: 3,
      },
      "& .MuiAutocomplete-popupIndicator": {
        order: 4,
        ...(isReadOnly && {
          display: "none !important",
        }),
      },
      "& .MuiAutocomplete-input": {
        order: 4,
        ...(isReadOnly && {
          visibility: "hidden !important",
        }),
      },
      "& .clear-button": {
        order: 5,
      },
      "& .status-icon": {
        order: 6,
      },
    },
    [theme.breakpoints.down("xl")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        width: "50vw",
      },
    },
    [theme.breakpoints.down("lg")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        width: "50vw",
      },
    },
    [theme.breakpoints.down("md")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        width: "75vw",
      },
      "& .name-label": {
        fontSize: "1.5em",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        width: "90vw",
      },
      "& .uid-label": {
        order: 2,
      },
      "& .label-input": {
        marginLeft: "0.5em",
      },
      "& .uid-label": {
        marginLeft: "0.5em",
      },
    },
    "@media (max-width: 950px)": {
      "& .name-label": {
        fontSize: "1.5em",
      },
      "& .uid-label": {
        fontSize: "1em",
      },
      "& .status-icon": {
        width: "2.4em",
        height: "2.4em",
      },
      "& .avatar": {
        width: "1.9em",
        height: "1.9em",
      },
    },
    "@media (max-width: 430px)": {
      "& .name-label": {
        fontSize: "1.2em",
      },
      "& .uid-label": {
        fontSize: "0.8em",
      },
      "& .status-icon": {},
    },
    "@media (max-width: 378px)": {
      "& .name-label": {
        fontSize: "1em",
      },
      "& .uid-label": {
        fontSize: "0.7em",
      },
    },
    "@media (max-width: 344px)": {
      "& .status-icon": {
        width: "1.4em",
        height: "1.4em",
      },
      "& .avatar": {
        width: "1.5em",
        height: "1.5em",
      },
      "& .clear-button": {
        fontSize: "0.9em",
        width: "1em",
        height: "1em",
        paddingRight: "1em",
      },
      "& .name-label": {
        fontSize: "0.8em",
      },
      "& .uid-label": {
        fontSize: "0.6em",
      },
    },
    "@media (max-width: 250px)": {
      "& .name-label": {
        fontSize: "0.8em",
      },
      "& .clear-button": {
        fontSize: "0.8em",
        width: "1em",
        height: "1em",
      },
    },
  };
});

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [selectedParticipants, setSelectedParticipants] = useState(
    Array(6).fill(null)
  );
  const [isReadOnlyArray, setIsReadOnlyArray] = useState(Array(6).fill(false));
  const [isHovered, setIsHovered] = useState(Array(6).fill(false));

  useEffect(() => {
    setUsers(userData.rows);
  }, []);

  // La fonction getStatus doit accepter un utilisateur en argument
  const getStatus = (user) => {
    if (user) {
      const {
        status,
        cause,
        dateCreated,
        dateSeen,
        dateValidated,
        dateRefused,
      } = user;

      switch (status) {
        case "Validé":
          return {
            icon: faCircleCheck,
            class: "fa-circle-check",
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
            icon: faCircleXmark,
            class: "fa-circle-times",
            textCreated: "Created: ",
            textSeen: "Seen: ",
            textRefused: "Refused: ",
            cause: cause,
            dateCreated: dateCreated,
            dateSeen: dateSeen,
            dateRefused: dateRefused,
          };
        case "Vu":
          return {
            icon: faEye,
            class: "fa-eye",
            textCreated: "Created: ",
            textSeen: "Seen: ",
            cause: "",
            dateCreated: dateCreated,
            dateSeen: dateSeen,
          };
        default:
          return {
            icon: faEyeSlash,
            class: "not-seen",
            textCreated: "Created: ",
            cause: "",
            dateCreated: dateCreated,
          };
      }
    }
  };

  function getTooltipContent(selectedParticipant) {
    const status = getStatus(selectedParticipant);
    const content = (
      <div className="tooltip-text">
        {selectedParticipant &&
          status.textCreated &&
          renderStatus(status.textCreated, selectedParticipant.dateCreated)}
        {selectedParticipant &&
          status.textSeen &&
          renderStatus(status.textSeen, selectedParticipant.dateSeen)}
        {selectedParticipant &&
          status.textValidated &&
          renderStatus(status.textValidated, selectedParticipant.dateValidated)}
        {selectedParticipant &&
          status.textRefused &&
          renderStatus(status.textRefused, selectedParticipant.dateRefused)}
        {selectedParticipant && status.cause && (
          <div className="cause custom-white-space">
            <div className="bold">Cause: </div>
            {status.cause}
          </div>
        )}
      </div>
    );

    // Vérifie si le contenu du tooltip est vide
    if (!content.props.children.some((child) => child)) {
      return null;
    }

    return content;
  }

  function renderStatus(text, date) {
    return (
      <div className="custom-white-space">
        <div className="status bold">{text}</div>
        <div className="date">{date}</div>
      </div>
    );
  }

  const handleReset = (index) => {
    const newSelectedParticipants = [...selectedParticipants];
    newSelectedParticipants[index] = null; // Réinitialisez à null
    setSelectedParticipants(newSelectedParticipants);

    // Réinitialisez l'état isReadOnly pour la carte spécifique
    setIsReadOnlyArray((prevIsReadOnly) => {
      const newIsReadOnly = [...prevIsReadOnly];
      newIsReadOnly[index] = false; // La carte redevient éditable
      return newIsReadOnly;
    });
  };

  const handleMouseEnter = (index) => {
    // Lorsque le curseur survole la carte
    setIsHovered((prevIsHovered) => {
      const newIsHovered = [...prevIsHovered];
      newIsHovered[index] = true;
      return newIsHovered;
    });
  };

  const handleMouseLeave = (index) => {
    // Lorsque le curseur quitte la carte
    setIsHovered((prevIsHovered) => {
      const newIsHovered = [...prevIsHovered];
      newIsHovered[index] = false;
      return newIsHovered;
    });
  };

  return (
    <div className="Cards">
      {selectedParticipants.map((selectedParticipant, index) => (
        <Tooltip
          title={getTooltipContent(selectedParticipant)}
          arrow
          placement={window.innerWidth < 900 ? "top-end" : "right"}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <StyledAutocomplete
            className="Autocomplete"
            id="Autocomplete"
            options={users}
            getOptionLabel={(option) => `${option.name}`}
            value={selectedParticipants[index]}
            onChange={(event, newValue) => {
              const newSelectedParticipants = [...selectedParticipants];
              newSelectedParticipants[index] = newValue;
              setSelectedParticipants(newSelectedParticipants);

              setIsReadOnlyArray((prevIsReadOnly) => {
                const newIsReadOnly = [...prevIsReadOnly];
                newIsReadOnly[index] = true;
                return newIsReadOnly;
              });
            }}
            readOnly={isReadOnlyArray[index]}
            isReadOnly={isReadOnlyArray[index]}
            index={index}
            renderInput={(params) => (
              <Box position="relative" className="Box">
                <TextField
                  {...params}
                  fullWidth
                  autoFocus
                  InputProps={{
                    ...params.InputProps,

                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {selectedParticipants[index] && (
                          <>
                            <Avatar
                              alt={selectedParticipants[index].name}
                              src={`https://annuaire-entreprise.inetpsa.com/photos/${selectedParticipants[
                                index
                              ].uid.slice(0, 1)}/${selectedParticipants[
                                index
                              ].uid.slice(1, 4)}/${
                                selectedParticipants[index].uid
                              }.JPG`}
                              className="avatar"
                            />
                            <div className="label-input">
                              <label
                                className="name-label"
                                {...params.InputLabelProps}
                              >
                                {selectedParticipants[index].name}{" "}
                              </label>
                              <label
                                className="uid-label"
                                {...params.InputLabelProps}
                              >
                                {selectedParticipants[index].uid}{" "}
                              </label>
                            </div>
                          </>
                        )}
                        {!selectedParticipants[index] && (
                          <Avatar className="avatar"></Avatar>
                        )}
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <React.Fragment>
                        {params.InputProps.endAdornment}
                        {selectedParticipants[index] && (
                          <FontAwesomeIcon
                            icon={getStatus(selectedParticipants[index]).icon}
                            className={`status-icon ${
                              getStatus(selectedParticipants[index]).class
                            }`}
                          />
                        )}
                        {isReadOnlyArray[index] &&
                          isHovered[index] &&
                          selectedParticipant && (
                            <button
                              className="clear-button"
                              onClick={() => handleReset(index)}
                            >
                              {/* × */}
                              {/* 🗑 */}
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                      </React.Fragment>
                    ),
                  }}
                />
              </Box>
            )}
            renderOption={(props, option) => (
              <li {...props}>
                <ListItemAvatar>
                  <Avatar
                    alt={option.name}
                    src={`https://annuaire-entreprise.inetpsa.com/photos/${option.uid.slice(
                      0,
                      1
                    )}/${option.uid.slice(1, 4)}/${option.uid}.JPG`}
                  />
                </ListItemAvatar>
                {option.name}
              </li>
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default UserCard;
