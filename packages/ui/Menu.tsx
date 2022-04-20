import * as React from "react";

import { MenuItems } from "./MenuItems";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const drawerWidth = 300;

const menuIcons = [
  { text: "Dashboard", Icon: DashboardIcon },
  { text: "Users", Icon: GroupIcon },
  { text: "Customers", Icon: ShoppingBasketIcon },
  { text: "Calendar", Icon: CalendarTodayIcon },
];
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  border: "none",
  borderRadius: "7px",
  boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  gap: "20%",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)})`,
  border: "none",
  borderRadius: "7px",
  boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  gap: "20%",
});

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      {open === true ? (
        <DrawerHeader style={{ alignItems: "center", flexDirection: "column" }}>
          <IconButton edge="start">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <span>Hi, JohnDOe</span>
          <span>john.doe@lim.com</span>
        </DrawerHeader>
      ) : (
        <DrawerHeader>
          <IconButton aria-label="open drawer" edge="start">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </DrawerHeader>
      )}
      <Box style={{ display: "flex", flexDirection: "column", flexGrow: 3 }}>
        {menuIcons.map(({ Icon, text }) => (
          <MenuItems text={text} open={open}>
            <Icon />
          </MenuItems>
        ))}
      </Box>
      <DrawerButton
        style={{
          flexDirection: open ? "row" : "column",
          justifyContent: open ? "space-around" : "center",
        }}
      >
        <SettingsIcon color="action" />
        <NotListedLocationIcon color="action" />
        <ExitToAppIcon color="error" />
      </DrawerButton>
    </Drawer>
  );
}
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  color: "black",
  flexGrow: 1,
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  flex: 1,
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
}));
