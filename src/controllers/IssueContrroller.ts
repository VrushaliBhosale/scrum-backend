import * as express from 'express';
import Issues,{IntIssue} from '../models/Issue';

class IssueController{
  public getAllIssues(args: any,req: express.Request): Array<IntIssue> | object {
    return Issues
    .find({})
    .then(data=>{
      return data;
    })
    .catch(err=>{
      console.log(err);
      throw err;
    })
  }

  public createIssue(args: any,req: express.Request){
    // if(args){
      return Issues
      .create(args)
      .then(data=>{
        return data
      })
      .catch(err=>{
        console.log(err)
      })
    }
  // }
}

export default new IssueController();
