import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import sideBarNews from '@/assets/side-top-news.png'
import Image from "next/image";

const Sidebar = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} height={100} alt="top-news" />
          </CardMedia>
          <CardContent>
            <p className="w-32 my-5 text-center rounded bg-red-500 text-white">
              Technology
            </p>
            <Typography gutterBottom variant="h4" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom component="div" className="my-3">
              By Rishad Islam - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Sidebar;
