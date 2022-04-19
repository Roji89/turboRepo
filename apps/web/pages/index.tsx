import { Box } from "@mui/material";
import { MainButton } from "ui";
import MiniDrawer from "ui/Menu";

export default function Web() {
  return (
    <Box
      style={{
        backgroundColor: "#F8F9FA",
        display: "flex",
        flex: "1",
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
    >
      <MiniDrawer />
      <Box
        style={{
          backgroundColor: "white",
          width: "50%",
          height: "90%",
          margin: "20px",
          flex: "1",
        }}
      ></Box>
      <Box
        style={{
          backgroundColor: "white",
          width: "50%",
          height: "90%",
          margin: "20px",
          flex: "1",
        }}
      ></Box>
    </Box>
  );
}
