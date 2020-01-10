import React from "react";
import { Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Route from "./Route";
import theme from "../Styles/index";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import CreateRecipes from "../pages/Recipes/CreateRecipes";
import EditRecipes from "../pages/Recipes/EditRecipes";
import ListRecipes from "../pages/Recipes";
import Tags from '../pages/Tags';

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/tags" component={Tags} isPrivate />
        <Route path="/add-recipe" component={CreateRecipes} isPrivate />
        <Route path="/edit-recipe" component={EditRecipes} isPrivate />
        <Route path="/recipes" component={ListRecipes} isPrivate />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </ThemeProvider>
  );
}
