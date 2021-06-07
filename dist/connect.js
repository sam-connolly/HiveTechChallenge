"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = ({ db }) => {
    const connect = () => {
        mongoose_1.default
            .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
            .then(() => {
            return console.info('Connected to Database');
        })
            .catch((error) => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on('disconnected', connect);
};
//# sourceMappingURL=connect.js.map