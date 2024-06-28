import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

// creating a new token with jwt.sign
export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // it will expire in 1 day
    expiresIn: "1d",
  });

  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "none", //prevent CSRF attack
    maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
  });
};

//Generate a token then set that token as cookie

// A cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies are designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity.


//A token is a piece of data, often a string, that is used to authenticate and authorize users.