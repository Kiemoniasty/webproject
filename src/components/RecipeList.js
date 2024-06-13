import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const RecipeList = ({ recipes }) => (
  <Grid container spacing={3}>
    {recipes.map((recipe) => (
      <Grid item xs={12} sm={6} md={4} key={recipe.uri}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={recipe.image}
            alt={recipe.label}
          />
          <CardContent>
            <Typography variant="h5">{recipe.label}</Typography>
            <Typography variant="body2" color="textSecondary">
              {recipe.source}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default RecipeList;
