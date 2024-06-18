import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RecipesList = ({ recipes = [] }) => {
  const [open, setOpen] = useState(false);
  const [detailType, setDetailType] = useState(null);
  const [detailContent, setDetailContent] = useState([]);

  const handleDetail = (type, content) => {
    setDetailType(type);
    setDetailContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2} padding={2}>
      {recipes.map((recipe) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          xl={1.5}
          xxl={1}
          key={recipe.recipe.uri}
        >
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {recipe.recipe.label}
              </Typography>
              <Button
                onClick={() =>
                  handleDetail("Ingredients", recipe.recipe.ingredientLines)
                }
              >
                {recipe.recipe.ingredientLines.length} Ingredients
              </Button>
              <Button
                onClick={() =>
                  handleDetail(
                    "Nutritional Details",
                    recipe.recipe.totalNutrients,
                  )
                }
              >
                {recipe.recipe.calories.toFixed(0)} Calories
              </Button>
            </CardContent>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                Source: {recipe.recipe.source}
              </Typography>
            </CardActions>
          </StyledCard>
        </Grid>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="detail-dialog-title"
      >
        <DialogTitle id="detail-dialog-title">{detailType}</DialogTitle>
        <DialogContent>
          <List dense style={{ listStyleType: "disc", marginLeft: "20px" }}>
            {detailType === "Nutritional Details"
              ? Object.entries(detailContent).map(
                  ([key, { label, quantity, unit }]) => (
                    <ListItem key={key}>
                      <ListItemText
                        primary={`${label}: ${quantity.toFixed(2)} ${unit}`}
                      />
                    </ListItem>
                  ),
                )
              : detailContent.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
          </List>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
