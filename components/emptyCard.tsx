import {
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Skeleton
} from "@mui/material";


const emptyCard = () => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: 936, borderRadius: "0.5rem",
          boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
        }}>
        <ListItem
          secondaryAction={
            <Skeleton animation="wave" width={10} height={40} />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary={
              <Skeleton animation="wave" width={40} height={40} />} />
          </ListItemButton>
        </ListItem>
      </Paper >
    </>
  );
};
export default emptyCard;

