import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
   // if the token is present already checking from the token
  try {
    let token = req.cookies?.token;

    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      //if it is the id of user  (***important***)
      const resp = await User.findById(decodedToken.userId).select(
        "isAdmin email"
      );

      //extracting the users info
      req.user = {
        email: resp.email,
        isAdmin: resp.isAdmin,
        userId: decodedToken.userId,
      };

      next();
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. Try login again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }
};

// for admin

const isAdminRoute = (req, res, next) => {
  // if he is a user and a admin
  if (req.user && req.user.isAdmin) {
    next();
  } 
  // thi mean he is not a admin
  else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };


