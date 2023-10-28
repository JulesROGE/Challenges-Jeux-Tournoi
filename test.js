import React, { useState, useEffect } from "react";
import "./UserCard.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { InputAdornment, ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Person } from "@mui/icons-material"; // Assurez-vous d'importer les icônes correctement

import {
  faSolid,
  faCheck,
  faCircleCheck,
  faTimes,
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
      // color: "red",
      paddingRight: "9px !important",
      "& .uid": {
        order: 2,
        // backgroundColor: "blue",
        // width: "250px",
        // display: "relative",
        right: "50%",
        position: "relative",
      },
      "& button": {
        order: 3,
      },
      "& > div.MuiAutocomplete-startAdornment": {
        backgroundColor: "green",
        color: "orange",
      },
      "& .MuiAutocomplete-popupIndicator": {
        // display: "flex",
        // justifyContent: "flex-end",
        // display: "none !important",

        order: 4,
        ...(isReadOnly && {
          display: "none !important",
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
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        width: "90vw",
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
          placement="right"
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: selectedParticipants[index] && (
                      <div className="uid">
                        {selectedParticipants[index].uid}
                      </div>
                    )
                  }}
                />
              </Box>
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default UserCard;






startAdornment: (
    <InputAdornment position="start">
      {selectedParticipants[index] && (
        <Avatar
          alt={selectedParticipants[index].name}
          src={selectedParticipants[index].image}
          className="avatar"
        />
      )}
      {!selectedParticipant && <Person />}
    </InputAdornment>
  ),
  endAdornment: (
    <React.Fragment>
      {params.InputProps.endAdornment}
      {selectedParticipants[index] && (
        <div className="uid">
          {selectedParticipants[index].uid}
        </div>
      )}
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



  import React, { useState, useEffect } from "react";
import "./UserCard.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { InputAdornment, ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Person } from "@mui/icons-material"; // Assurez-vous d'importer les icônes correctement

import {
  faSolid,
  faCheck,
  faCircleCheck,
  faTimes,
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
      paddingRight: "9px !important",
      "& button": {
        order: 2,
      },
      "& > div.MuiAutocomplete-endAdornment": {
        // position: "relative",
        order: 3,
        ...(isReadOnly && {
          display: "none",
        }),
      },
      "& .clear-button": {
        order: 4,
      },
      "& .status-icon": {
        order: 5,
      },
    },
    [theme.breakpoints.down("xl")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        // color: "yellow",
        // fontSize: 19,
        width: "50vw",
      },
    },
    [theme.breakpoints.down("lg")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        // color: "yellow",
        // fontSize: 19,
        width: "50vw",
      },
    },
    [theme.breakpoints.down("md")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        // color: "green",
        // fontSize: 17,
        width: "75vw",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
        // color: "blue",
        // fontSize: 15,
        width: "90vw",
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
          placement="right"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <StyledAutocomplete
            className="Autocomplete"
            id="Autocomplete"
            options={users}
            getOptionLabel={(option) => `${option.name} ${option.uid}`}
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
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        {selectedParticipants[index] && (
                          <Avatar
                            alt={selectedParticipants[index].name}
                            src={selectedParticipants[index].image}
                            className="avatar"
                          />
                        )}
                        {!selectedParticipant && <Person />}
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
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                      </React.Fragment>
                    ),
                    // Appliquez la classe de style personnalisée à MuiInputBase-input
                    // className: ,
                  }}
                />
              </Box>
            )}
            renderOption={(props, option) => (
              <div {...props}>
                <div>{option.name}</div>
              </div>
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default UserCard;
