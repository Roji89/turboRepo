import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const menuIcons = [
  { text: "Dashboard", Icon: DashboardIcon },
  { text: "Users", Icon: GroupIcon },
  { text: "Customers", Icon: ShoppingBasketIcon },
  { text: "Calendar", Icon: CalendarTodayIcon },
];

const botomMenuIcons = [
  { Icon: KeyboardArrowRightIcon },
  { Icon: SettingsIcon },
  { Icon: NotListedLocationIcon },
  { Icon: ExitToAppIcon },
];
interface Props {
  style?: React.CSSProperties;
  open: boolean;
  openByClick?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClickOpen?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickClose?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function SideBar({
  style,
  open,
  onMouseEnter,
  onMouseLeave,
  onClickOpen,
  onClickClose,
  openByClick,
}: Props) {
  return (
    <StyledPaper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      elevation={3}
      style={style}
    >
      {open === true ? (
        <DrawerHeader
          style={{
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton edge="start">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <span>Hi, JohnDoe</span>
          <span>john.doe@lim.com</span>
        </DrawerHeader>
      ) : (
        <DrawerHeader
          style={{ justifyContent: "center", alignItems: "flex-start" }}
        >
          <IconButton aria-label="open drawer" edge="start">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </DrawerHeader>
      )}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 4,
          justifyContent: "center",
        }}
      >
        {menuIcons.map(({ Icon, text }) => (
          <ListItemButton
            sx={{
              minWidth: 10,
              maxHeight: 50,
              px: 2.5,
              mr: open ? 3 : "auto",
              justifyContent: open ? "initial" : "center",
              "&:hover": {
                color: "#7338AC",
              },
            }}
          >
            <ListItemIcon>
              <Icon
                style={{ WebkitFilter: "drop-shadow(0 5px 5px #555555)" }}
              />
            </ListItemIcon>
            {open && <ListItemText primary={text} />}
          </ListItemButton>
        ))}
      </Box>
      <DrawerBottom
        style={{
          flexDirection: open ? "row" : "column",
          justifyContent: open ? "center" : "flex-end",
        }}
      >
        {openByClick === false ? (
          <Button
            onClick={onClickOpen}
            sx={{ minWidth: 0 }}
            style={{ color: "#555555", opacity: "60%", width: "2px" }}
          >
            <KeyboardArrowRightIcon />
          </Button>
        ) : (
          <IconButton
            onClick={onClickClose}
            style={{ color: "#555555", opacity: "60%" }}
          >
            <CloseIcon />
          </IconButton>
        )}

        <SettingsIcon style={{ color: "#555555", opacity: "60%" }} />
        <NotListedLocationIcon style={{ color: "#555555", opacity: "60%" }} />
        <ExitToAppIcon color="error" />
      </DrawerBottom>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 30px;
`;

const DrawerHeader = styled(Box)(() => ({
  display: "flex",
  color: "black",
}));

const DrawerBottom = styled(Box)(() => ({
  display: "flex",
  minHeight: "30px",
  flexGrow: 1,
  alignItems: "center",
}));
