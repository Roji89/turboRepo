import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  text?: string;
  children: JSX.Element;
  open: boolean;
}
export const MenuItems = ({ text, children, open }: Props) => {
  return (
    <ListItemButton
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
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
          "&:hover": {
            color: "#7338AC",
          },
        }}
      >
        {children}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};
