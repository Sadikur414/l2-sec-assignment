"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/api/users", user_controller_1.UserController.createUser);
router.get('/api/users', user_controller_1.UserController.getAllUsers);
router.get('/api/users/:userId', user_controller_1.UserController.getSingleUser);
router.delete('/api/users/:userId', user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
