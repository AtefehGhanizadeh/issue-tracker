import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const SidebarList = () => {
  const navigate = useNavigate();

  const menu = [
    { label: "Issues", path: "/issues" },
    { label: "New Issue", path: "/new-issue" },
  ];

  return (
    <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {menu.map((item) => {
        return (
          <ListItemButton
            key={item.path}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 1,
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default SidebarList;
