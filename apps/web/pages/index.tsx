import React from "react";

import { Box } from "@mui/material";
import SideBar from "ui/Menu";

export default function Web() {
  const [isHoveredDrawer, toggleDrawerHoverState] = React.useState(false);
  const [isOpenDrawer, toggleDrawerOpenState] = React.useState(false);

  const hoverDrawerOpen = () => {
    toggleDrawerHoverState(true);
  };

  const hoverDrawerClose = () => {
    toggleDrawerHoverState(false);
  };

  const onClickOpen = () => {
    toggleDrawerOpenState(true);
  };
  const onClickClose = () => {
    toggleDrawerOpenState(false);
  };

  return (
    <Box
      style={{
        backgroundColor: "#F8F9FA",
        display: "flex",
        flex: "1",
        height: "100%",
        width: "100%",
        position: "absolute",
        flexDirection: "row",
      }}
    >
      <Box
        style={{
          width: !isOpenDrawer ? "70px" : "auto",
          height: "95%",
        }}
      >
        <SideBar
          style={{
            position: isHoveredDrawer && !isOpenDrawer ? "absolute" : "initial",
          }}
          open={isHoveredDrawer || isOpenDrawer}
          onMouseEnter={hoverDrawerOpen}
          onMouseLeave={hoverDrawerClose}
          onClickOpen={onClickOpen}
          onClickClose={onClickClose}
          openByClick={isOpenDrawer}
        />
      </Box>
      <Box
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "95%",
          margin: "20px",
          flex: "1",
        }}
      ></Box>
    </Box>
  );
}
