import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>

          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>
      </Container>
      <Box className="w-full text-center">
        {navItems.map((item) => (
          <Link key={item} href={item.pathname}>
            <Button className={`text-white`}>{item.route}</Button>
          </Link>
        ))}
      </Box>

      <Typography color={"gray"} variant="body2" textAlign={"center"}>
        @2023 the dragon news. Design by PH.{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
