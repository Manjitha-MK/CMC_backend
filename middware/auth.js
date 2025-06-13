import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded contains user ID, etc.
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}
// export default function auth(req, res, next) {
//   console.log("Auth middleware triggered");
//   next();
// }