import * as server from 'express';
import IssueController from '../controllers/IssueContrroller';

/**
 * @export TaskRoutes
 */

export default class TaskRoutes{
  public router: server.Router;

  constructor() {
      this.router =server.Router();
      this.routes();
  }

  /**
   * @memberof TaskRoutes
   */
  public routes(): void {
      this.router.get('/', IssueController.getAllIssues);
  }
}