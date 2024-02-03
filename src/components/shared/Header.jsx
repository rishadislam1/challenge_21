import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentFormattedDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentFormattedDate();

  return (
    <Box>
      <Container>
        <Image
          src={headingImage}
          width={500}
          height={500}
          alt="heading news"
          className="mx-auto"
        />
        <Typography
          color={"gray"}
          variant="body2"
          textAlign={"center"}
          className="my-2"
        >
          Dragon news best site
        </Typography>
        <Typography
          color={"gray"}
          variant="body2"
          textAlign={"center"}
          className="mb-5"
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
