import JWT from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({
      status: "error",
      message: "Access-Denied",
    });
  }
  try {
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: "Invalid User",
    });
  }
};
