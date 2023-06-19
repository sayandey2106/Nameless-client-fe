import { Box, Typography, styled } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";


// For styled typography
const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}));

const MainFrame = ({ item }) => {
  const { id, poster, title, genre, year, duration } = item;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "56.25%", // 16:9 aspect ratio (9 / 16 * 100%)
          position: "relative",
        }}
      >
        <img
          src={poster}
          alt={title}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          color: "white",
          width: "100%",
          textAlign: "left", 
          bottom: 50,
          left: 0, 
        }}
      >
        <ResponsiveTypography ml={6}>
          <PlayCircleFilledWhiteIcon
          fontSize="large"
            sx={{
              marginRight: "10px",
              fontWeight: "bold",
            }}
          />
          {title}
          <br />
          {genre}
          {"  "}
          {duration}
          {"  "}
          {year}
        </ResponsiveTypography>
      </Box>
    </Box>
  );
};

export default MainFrame;
