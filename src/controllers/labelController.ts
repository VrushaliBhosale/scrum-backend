import * as express from 'express';
import Label,{ILabel} from '../models/Label';

class LabelController{
  public getAllLabels(args: any,req: express.Request): Array<ILabel> | object {
    return Label
    .find({})
    .then(data=>{
      return data;
    })
    .catch(err=>{
      console.log(err);
      throw err;
    })
  }

  public createLabel({input},req: express.Request): ILabel | object {
    return Label
    .create(input)
    .then(data=>{
      return data
    })
    .catch(err=>{
      console.log(err)
    })
   }

  public getLabelByID({id}, req: express.Request){
    return Label
    .findById(id)
    .then(data=>{return data})
    .catch(err=>console.log(err));
  }

  public updateLabel({id,input}, req: express.Request){
    return Label
    .findByIdAndUpdate(id,input)
    .then(data=>{return data})
    .catch(err=>console.log(err))
  }
}

export default new LabelController();
