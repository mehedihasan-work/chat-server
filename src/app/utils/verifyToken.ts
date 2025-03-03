import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const verifyToken = (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  return decoded;
};

export default verifyToken;
