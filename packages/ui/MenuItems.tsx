import { IconButtonProps } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  text: string;
  index: IconButtonProps;
  open: Boolean;
}
export const MenuItems = ({ text, index, open }: Props) => {
  return (
    <ListItemButton
      key={text}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};
