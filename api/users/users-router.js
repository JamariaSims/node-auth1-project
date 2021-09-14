// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const Router = require("express").Router();
const Users = require("./users-model");

Router.get("/", async (req, res, next) => {
  const data = await Users.find();
  res.status(200).json(data);
});
module.exports = Router;
/** d
  [GET] /api/users
  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */

// Don't forget to add the router to the `exports` object so it can be required in other modules
