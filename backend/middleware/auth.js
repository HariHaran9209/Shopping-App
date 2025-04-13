import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;
    next();
  } catch (error) {
    console.log("JWT verification failed:", error.message); // 👈 See this log in terminal
    return res.status(401).json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
