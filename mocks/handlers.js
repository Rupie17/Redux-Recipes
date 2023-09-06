import { rest } from "msw";
import recipesData from "./recipes.json";
import usersData from "./users.json";

export const handlers = [
  rest.get("/api/recipes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(recipesData));
  }),
  rest.get("/api/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    return res(ctx.status(200), ctx.json(usersData));
  }),
];
