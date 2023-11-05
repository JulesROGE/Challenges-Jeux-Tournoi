import "./Card.sass";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Valorant from "./Valorant";
import Fortnite from "./Fortnite";

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

  const handleOpenValorant = () => setOpenValorant(true);
  const handleCloseValorant = () => setOpenValorant(false);
  const handleOpenRocketLeague = () => setOpenRocketLeague(true);
  const handleCloseRocketLeague = () => setOpenRocketLeague(false);
  const handleOpenFortnite = () => setOpenFortnite(true);
  const handleCloseFortnite = () => setOpenFortnite(false);

  return (
    <div className="Cards">
      <div className="Card">
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
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
        >
          <Box sx={style}>
            <h1 className="titre">Challenge Valorant</h1>
            <Valorant />
          </Box>
        </Modal>
      </div>
      <div className="Card">
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
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
        >
          <Box sx={style}>
            <h1 className="titre">Challenge Rocket League</h1>
            <h2 className="titre">PlayAbility</h2>
          </Box>
        </Modal>
      </div>
      <div className="Card">
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
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
        >
          <Box sx={style}>
            <h1 className="titre">Challenge Fortnite</h1>
            <Fortnite />
          </Box>
        </Modal>
      </div>
    </div>
  );
}
