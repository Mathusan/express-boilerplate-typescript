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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFind = exports.logIn = exports.signUp = void 0;
const { findUser, createUser, findUserById } = require('../../database/repository/user.repository');
const { FormateData, generatePassword, generateToken, validatePassword } = require('../utils/index');
const signUp = (userInputs) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = userInputs;
    try {
        const checkExistingUser = yield findUser({ email });
        if (!checkExistingUser) {
            let hashedPassword = yield generatePassword(password);
            //console.log("1zz")
            const newUser = yield createUser({ name, email, password: hashedPassword });
            const token = yield generateToken({ email: newUser.email, _id: newUser._id });
            return { id: newUser._id, token };
        }
        else {
            return { err: "Email already registered" };
        }
    }
    catch (error) {
        return { error: error };
    }
});
exports.signUp = signUp;
const logIn = (userInputs) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = userInputs;
    try {
        const existingUser = yield findUser({ email });
        if (existingUser) {
            const validatedPassword = yield validatePassword(password, existingUser.password);
            if (validatedPassword) {
                const token = yield generateToken({ email: existingUser.email, _id: existingUser._id });
                return { id: existingUser._id, token };
            }
            else {
                return { err: "Incorrect Password" };
            }
        }
        else {
            return { err: " User not found " };
        }
    }
    catch (error) {
        return { error: error };
    }
});
exports.logIn = logIn;
const userFind = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield findUserById({ id });
        return user;
    }
    catch (error) {
    }
});
exports.userFind = userFind;
