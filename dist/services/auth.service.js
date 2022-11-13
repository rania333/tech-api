"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = exports.comparePass = exports.encryptPassword = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const encryptPassword = async (pass) => {
    try {
        const hashedPass = await bcrypt.hash(pass, parseInt(process.env.SALT));
        return hashedPass;
    }
    catch (err) {
        console.error(err);
    }
};
exports.encryptPassword = encryptPassword;
const comparePass = async (plainPas, hashedPass) => {
    try {
        const pass = await bcrypt.compare(plainPas, hashedPass);
        return pass ? true : false;
    }
    catch (err) {
        console.error(err);
    }
};
exports.comparePass = comparePass;
const generateToken = async (payload) => {
    try {
        const token = await jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: '2h' });
        return token;
    }
    catch (err) {
        console.error(err);
    }
};
exports.generateToken = generateToken;
const decodeToken = async (token) => {
    try {
        const decodedToken = await jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        return decodedToken;
    }
    catch (err) {
        console.error(err);
    }
};
exports.decodeToken = decodeToken;
