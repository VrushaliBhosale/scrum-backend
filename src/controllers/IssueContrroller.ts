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

  public createIssue({input},req: express.Request): IntIssue | object {
    return Issues
    .create(input)
    .then(data=>{
      return data
    })
    .catch(err=>{
      console.log(err)
    })
   }

  public getIssueByID({id}, req: express.Request){
    return Issues
    .findById(id)
    .then(data=>{return data})
    .catch(err=>console.log(err));
  }

  public updateIssue({id,input}, req){
    return Issues
    .findByIdAndUpdate(id,input)
    .then(data=>{return data})
    .catch(err=>console.log(err))
  }
}

export default new IssueController();
