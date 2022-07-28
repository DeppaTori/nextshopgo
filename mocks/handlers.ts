import { rest } from "msw";

export const handlers = [
  rest.get("https://api.nextshop.com/v1/hello", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "hlohalo",
      })
    );
  }),
];
