import * as express from 'express';
import Status,{IStatusColumn} from '../models/StatusColumn';

class StatusController{
  public getAllLStatus(args: any,req: express.Request): Array<IStatusColumn> | object {
    return Status
    .find({})
    .populate('issues')
    .then(data=>{
      return data;
    })
    .catch(err=>{
      console.log(err);
      throw err;
    })
  }

  public createStatus({input},req: express.Request): IStatusColumn | object {
    return Status
    .create(input)
    .then(data=>{
      return data
    })
    .catch(err=>{
      console.log(err)
    })
   }

  public getStatusByID({id}, req: express.Request){
    return Status
    .findById(id)
    .then(data=>{return data})
    .catch(err=>console.log(err));
  }

  public updateStatus({id,input}, req: express.Request){
    return Status
    .findByIdAndUpdate(id,input)
    .then(data=>{return data})
    .catch(err=>console.log(err))
  }
}

export default new StatusController();
