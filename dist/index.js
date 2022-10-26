"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const connection_1 = __importDefault(require("./database/connection"));
const userRoutes_1 = __importDefault(require("./src/api/routes/userRoutes"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
(0, connection_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((body_parser_1.default.urlencoded({ extended: true })));
app.get('/', (req, res) => {
    res.json({ data: "hello" });
});
app.use('/user', userRoutes_1.default);
app.listen(config_1.default.port, () => {
    console.log(`Server running at ${config_1.default.port}`);
});
