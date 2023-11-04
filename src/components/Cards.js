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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="Cards">
      <div className="Card">
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
            <CardMedia
              onClick={handleOpen}
              component="img"
              height="140"
              image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-b88adde6a57e40aa85818820aa87a6cd"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Valorant
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="titre">Challenge Valorant</h1>

            <Valorant />

            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </Modal>
      </div>
      <div className="Card">
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
            <CardMedia
              onClick={handleOpen}
              component="img"
              height="140"
              image="https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-0f2f0dbbb161b884d50f2ca09f4110bf"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rocket League
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
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
              onClick={handleOpen}
              component="img"
              height="140"
              image="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-b88adde6a57e40aa85818820aa87a6cd"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Valorant
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="titre">Challenge Valorant</h1>

            <Valorant />
          </Box>
        </Modal>
      </div>
    </div>
  );
}
