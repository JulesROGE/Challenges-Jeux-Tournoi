import "./Card.scss";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Valorant from "./Valorant";
import Fortnite from "./Fortnite";
import CS2 from "./CS2";
import LOL from "./LOL";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ActionAreaCard() {
  const [openValorant, setOpenValorant] = React.useState(false);
  const [openRocketLeague, setOpenRocketLeague] = React.useState(false);
  const [openFortnite, setOpenFortnite] = React.useState(false);
  const [openCS2, setOpenCS2] = React.useState(false);
  const [openLOL, setOpenLOL] = React.useState(false);
  const [openMC, setOpenMC] = React.useState(false);

  const handleOpenValorant = () => setOpenValorant(true);
  const handleCloseValorant = () => setOpenValorant(false);
  const handleOpenRocketLeague = () => setOpenRocketLeague(true);
  const handleCloseRocketLeague = () => {
    setIsTextVisibleCHargement(false);
    setOpenRocketLeague(false);
    setIsTextVisible(false);
  };
  const handleOpenFortnite = () => setOpenFortnite(true);
  const handleCloseFortnite = () => setOpenFortnite(false);
  const handleOpenCS2 = () => setOpenCS2(true);
  const handleCloseCS2 = () => setOpenCS2(false);
  const handleOpenLOL = () => setOpenLOL(true);
  const handleCloseLOL = () => setOpenLOL(false);
  const handleOpenMC = () => setOpenMC(true);
  const handleCloseMC = () => {
    setIsTextVisibleCHargement(false);
    setOpenMC(false);
    setIsTextVisible(false);
  };

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextVisible_Mystery_Challenge, setIsTextVisible_Mystery_Challenge] = useState(false);
  const [isTextVisible_First_Choice_Challenge, setIsTextVisible_Mystery_Challenge_First_Choice_Challenge] = useState(false);
  const [isTextVisible_Second_Choice_Challenge, setIsTextVisible_Mystery_Challenge_Second_Choice_Challenge] = useState(false);
  const [isTextVisibleCHargement, setIsTextVisibleCHargement] = useState(false);
  const [isTextVisibleCHargement_Mystery_Challenge, setIsTextVisibleCHargement_Mystery_Challenge] = useState(false);
  const [isTextVisibleCHargement_First_Choice_Challenge, setIsTextVisibleCHargement_First_Choice_Challenge] = useState(false);
  const [isTextVisibleCHargement_Second_Choice_Challenge, setIsTextVisibleCHargement_Second_Choice_Challenge] = useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleButtonClick = () => {
    setIsTextVisibleCHargement(true);
    // Réinitialisez la progression
    setProgress(0);

    // Utilisez la valeur de "progress" pour calculer le délai
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsTextVisible(true);
          return 0;
        }
        console.log(prevProgress);
        return prevProgress + 10;
      });
    }, 200);
  };

  const handleButtonClickMysteryChallenge = () => {
    setIsTextVisibleCHargement_Mystery_Challenge(true);
    // Réinitialisez la progression
    setProgress(0);

    // Utilisez la valeur de "progress" pour calculer le délai
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsTextVisible_Mystery_Challenge(true);
          return 0;
        }
        console.log(prevProgress);
        return prevProgress + 10;
      });
    }, 200);
  };

  const handleButtonClickFirstChoiceChallenge = () => {
    setIsTextVisibleCHargement(true);
    // Réinitialisez la progression
    setProgress(0);

    // Utilisez la valeur de "progress" pour calculer le délai
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsTextVisible(true);
          return 0;
        }
        console.log(prevProgress);
        return prevProgress + 10;
      });
    }, 200);
  };

  const handleButtonClickSecondChoiceChallenge = () => {
    setIsTextVisibleCHargement(true);
    // Réinitialisez la progression
    setProgress(0);

    // Utilisez la valeur de "progress" pour calculer le délai
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsTextVisible(true);
          return 0;
        }
        console.log(prevProgress);
        return prevProgress + 10;
      });
    }, 200);
  };

  // const handleCloseRocketLeague = () => {
  //   setIsTextVisible(false);
  //   // Ajoutez ici le code pour fermer la modal si nécessaire
  // };

  return (
    <div className="Cards">
      <div className="CardsRow1">
        <div className="Card Valorant">
          <Card sx={{ maxWidth: 345}} className="Card">
            <CardActionArea className="ValorantCardActionArea">
              <CardMedia
                onClick={handleOpenValorant}
                component="img"
                height="140"
                image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-b88adde6a57e40aa85818820aa87a6cd"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openValorant}
            onClose={handleCloseValorant}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="ValoModalChallenge"
          >
            <Box sx={style}>
              <Valorant />
            </Box>
          </Modal>
        </div>
        <div className="Card Rocket-League">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea className="RocketLeagueCardActionArea">
              <CardMedia
                onClick={handleOpenRocketLeague}
                component="img"
                height="140"
                image="https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-0f2f0dbbb161b884d50f2ca09f4110bf"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openRocketLeague}
            onClose={handleCloseRocketLeague}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="RLModalChallenge"
          >
            <Box sx={style}>
              <h1 className="titre challenge_title">Challenge Rocket League</h1>
              <CardActionArea
                onClick={handleButtonClick}
                className="RLBackgroundCard"
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5
                      className={
                        isTextVisibleCHargement ? "hidden" : "Click_Me"
                      }
                    >
                      Cliquez ici pour voir le challenge
                    </h5>
                    <h3
                      className={isTextVisibleCHargement ? "titre Reveal_Challenge" : "hidden"}
                    >
                      {isTextVisible ? (
                        "PlayAbility"
                      ) : (
                        <CircularProgress
                          variant="determinate"
                          value={progress}
                          className="CircularProgress"
                        />
                      )}
                    </h3>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Modal>
        </div>
        <div className="Card Fortnite">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea className="FortniteCardActionArea">
              <CardMedia
                onClick={handleOpenFortnite}
                component="img"
                height="140"
                image="https://cdn.sortiraparis.com/images/80/66131/908390-fortnite-enfer-vert-map-skins-passe-de-combat-le-point-sur-les-nouveautes-de-la-saison-3.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openFortnite}
            onClose={handleCloseFortnite}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="FTModalChallenge"
          >
            <Box sx={style}>
              <Fortnite />
            </Box>
          </Modal>
        </div>
      </div>
      <div className="CardsRow2">
        <div className="Card CS2">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea className="CS2CardActionArea">
              <CardMedia
                onClick={handleOpenCS2}
                component="img"
                height="140"
                image="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openCS2}
            onClose={handleCloseCS2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="CS2ModalChallenge"
          >
            <Box sx={style}>
              <CS2 />
            </Box>
          </Modal>
        </div>
        <div className="Card Minecraft">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea className="MinecraftCardActionArea">
              <CardMedia
                onClick={handleOpenMC}
                component="img"
                height="140"
                image="https://i0.wp.com/xxboxnews.blob.core.windows.net/prod/sites/9/2021/10/Minecraft_PC_Bundle_XboxClub_1920x1080.jpg?fit=1024%2C576&ssl=1"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openMC}
            onClose={handleCloseMC}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="MCModalChallenge"
          >
            <Box sx={style}>
              <h1 className="titre challenge_title">Challenge Minecraft Bed Wars</h1>
              <CardActionArea
                onClick={handleButtonClickMysteryChallenge}
                className={`MCBackgroundCardMystery ${isTextVisibleCHargement_Mystery_Challenge ? "Reveal_Mystery_Challenge_Style" : "hidden"}`}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5
                      className={
                        isTextVisibleCHargement_Mystery_Challenge ? "hidden" : "Click_Me_Mystery_Challenge Reveal_Mystery_Challenge"
                      }
                    >
                      Challenge Mystère (+ 5 points)
                    </h5>
                    <h5
                      className={isTextVisibleCHargement_Mystery_Challenge ? "titre" : "hidden"}
                    >
                      {isTextVisible_Mystery_Challenge ? (
                        "PlayAbility (+ 5 points)"
                      ) : (
                        <CircularProgress
                          variant="determinate"
                          value={progress}
                          className="CircularProgress"
                        />
                      )}
                    </h5>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActionArea
                className="MCBackgroundCard"
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5
                      className="Click_Me"
                    >
                      Lunettes de simulation (+ 3 points)
                    </h5>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActionArea
                className="MCBackgroundCard"
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5
                      className="Click_Me"
                    >
                      Absence de son (+ 2 points)
                    </h5>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Modal>
        </div>
        <div className="Card LOL">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea className="LOLCardActionArea">
              <CardMedia
                onClick={handleOpenLOL}
                component="img"
                height="140"
                image="https://www.global-esports.news/wp-content/uploads/2022/01/League-of-Legends-2022.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Modal
            open={openLOL}
            onClose={handleCloseLOL}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="LOLModalChallenge"
          >
            <Box sx={style}>
              <LOL />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
