"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_controller_1 = require("./auth.controller");
class Auth {
    constructor() {
        this.router = express.Router();
        this.router.route('/');
        this.router.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.get('token');
                const user = yield auth_controller_1.default.getUser(token);
                res.status(200).json({
                    user
                });
            }
            catch (error) {
                res.status(401).json({
                    error
                });
            }
        }));
        this.router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const resp = yield auth_controller_1.default.login(email, password);
                const login = 'success';
                res.status(200).json({
                    login,
                    resp
                });
            }
            catch (error) {
                const login = 'fail';
                res.status(401).json({
                    login,
                    error
                });
            }
        }));
        this.router.post('/signup', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const resp = yield auth_controller_1.default.signup(body);
                const signup = 'success';
                res.status(201).json({
                    signup,
                    resp
                });
            }
            catch (error) {
                let signup = 'fail';
                if (error.code === 11000) {
                    signup = 'fail duplicate';
                }
                else {
                    for (const err in error.errors) {
                        signup = `${signup} ${error.errors[err].path}`;
                    }
                }
                res.status(400).json({
                    signup,
                    error
                });
            }
        }));
        this.router.get('/verify/resend', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.get('token');
                const sent = yield auth_controller_1.default.resendVerification(token);
                res.status(200).json({
                    sent
                });
            }
            catch (error) {
                res.status(400).json({
                    error
                });
            }
        }));
        this.router.get('/verify/:id/:verifyCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, verifyCode } = req.params;
                const verified = yield auth_controller_1.default.verify(id, verifyCode);
                const status = verified === true ? 200 : 401;
                res.status(status).json({
                    verified
                });
            }
            catch (error) {
                res.status(400).json({
                    error
                });
            }
        }));
    }
}
exports.default = new Auth().router;
//# sourceMappingURL=auth.routes.js.map