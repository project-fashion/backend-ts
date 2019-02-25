import * as express from 'express';

import auth from './auth.controller';

class Auth {
  public router: express.Router;

  constructor() {
    this.router = express.Router();

    this.router.route('/');

    this.router.get('/user', async (req, res) => {
      try {
        const token = req.get('token');
        const user = await auth.getUser(token);
        res.status(200).json({
          user
        });
      } catch (error) {
        res.status(401).json({
          error: error.message
        });
      }
    });

    this.router.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const resp = await auth.login(email, password);
        const login = 'success';
        res.status(200).json({
          login,
          resp
        });
      } catch (error) {
        const login = 'fail';
        res.status(401).json({
          login,
          error: error.message
        });
      }
    });

    this.router.post('/signup', async (req, res) => {
      try {
        const body = req.body;
        const resp = await auth.signup(body);
        const signup = 'success';
        res.status(201).json({
          signup,
          resp
        });
      } catch (error) {
        const signup = 'fail';
        res.status(400).json({
          signup,
          error: error.message
        });
      }
    });

    this.router.get('/verify/resend', async (req, res) => {
      try {
        const token = req.get('token');
        const sent = await auth.resendVerification(token);
        res.status(200).json({
          sent
        });
      } catch (error) {
        res.status(400).json({
          error: error.message
        });
      }
    });

    this.router.get('/verify/:id/:verifyCode', async (req, res) => {
      try {
        const { id, verifyCode } = req.params;
        const verified = await auth.verify(id, verifyCode);
        const status = verified === true ? 200 : 401;
        res.status(status).json({
          verified
        });
      } catch (error) {
        res.status(400).json({
          error: error.message
        });
      }
    });
  }
}

export default new Auth().router;
