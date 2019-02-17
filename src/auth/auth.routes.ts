import * as express from 'express';

import Controller from './auth.controller';

class Auth {
  public router: express.Router;

  constructor() {
    this.router = express.Router();

    this.router.route('/');

    this.router.post('/signup', async (req, res) => {
      try {
        const body = req.body;
        const resp = await Controller.signup(body);
        res.status(200).json({
          resp
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
        const resp = await Controller.login(email, password);
        res.status(200).json({
          resp
        });
      } catch (error) {
        res.status(401).json({
          error: error.message
        });
      }
    });
  }
}

export default new Auth().router;
