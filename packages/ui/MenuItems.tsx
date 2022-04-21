import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  children: React.ReactNode;
  open: boolean;
  text?: string;
  showText?: boolean;
}
export const MenuItems = ({ text, children, open }: Props) => {
  return (
    <ListItemIcon
      sx={{
        minWidth: 10,
        minHeight: 40,
        px: 1.5,
        mr: open ? 3 : "auto",
        justifyContent: open ? "initial" : "center",
        "&:hover": {
          color: "#7338AC",
        },
      }}
    >
      {children}
      <ListItemText
        key={text}
        primary={text}
        sx={{ opacity: open ? 1 : 0, paddingLeft: "4px" }}
      />
    </ListItemIcon>
  );
};

{
  /* <ListItemButton
  key={text}
  sx={{
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    "&:hover": {
      color: "#7338AC",
      // backgroundColor: "rgba(115, 56, 172, .5)",
    },
  }}
></ListItemButton>; */
}
// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   display: "flex",
//   flex: 1,
//   width: drawerWidth,
//   flexShrink: 0,
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
//   bottom: 10,
// }));
// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   border: "none",
//   borderRadius: "7px",
//   boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
//   gap: "20%",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)})`,
//   border: "none",
//   borderRadius: "7px",
//   boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
//   gap: "20%",
// });
