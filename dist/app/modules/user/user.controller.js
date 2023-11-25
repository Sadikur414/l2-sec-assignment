"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const user_zodvalidation_1 = __importDefault(require("./user.zodvalidation"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: userData } = req.body;
    try {
        //creating a schema validation using zod
        const zodParseData = user_zodvalidation_1.default.parse(userData);
        const result = yield user_service_1.UserServices.createUserIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            massage: "User is created successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUserFromDb();
        res.status(200).json({
            success: true,
            massage: "User is Retriev successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserServices.getSingleUserFromDb(userId);
        res.status(200).json({
            success: true,
            massage: "User is Retriev successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserServices.deleteUserfromDB(userId);
        res.status(200).json({
            success: true,
            massage: "User is deleted successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        });
    }
});
exports.UserController = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser
};
