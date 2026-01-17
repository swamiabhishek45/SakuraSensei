import jwt, { SignOptions } from "jsonwebtoken";
import { UserPayload } from "../types/types";

const JWT_SECRET: string =
  process.env.JWT_SECRET ??
  (() => {
    throw new Error("JWT_SECRET is missing");
  })();

const JWT_REFRESH_SECRET: string =
  process.env.JWT_REFRESH_SECRET ??
  (() => {
    throw new Error("JWT_REFRESH_SECRET is missing");
  })();

const JWT_EXPIRES_IN: SignOptions["expiresIn"] =
  (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "15m";

const JWT_REFRESH_EXPIRES_IN: SignOptions["expiresIn"] =
  (process.env.JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"]) || "7d";

export const generateAccessToken = (payload: UserPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export const generateRefreshToken = (payload: UserPayload): string => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRES_IN,
  });
};

export const verifyAccessToken = (token: string): UserPayload => {
  return jwt.verify(token, JWT_SECRET) as UserPayload;
};

export const verifyRefreshToken = (token: string): UserPayload => {
  return jwt.verify(token, JWT_REFRESH_SECRET) as UserPayload;
};

export const getRefreshTokenExpiry = (): Date => {
  const expiresIn = JWT_REFRESH_EXPIRES_IN;

  if (typeof expiresIn === "number") {
    return new Date(Date.now() + expiresIn * 1000);
  }

  const value = parseInt(expiresIn);
  const unit = expiresIn.replace(String(value), "");

  const multipliers: Record<string, number> = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };

  return new Date(Date.now() + value * (multipliers[unit] || 0));
};
