import { personalTaskModel } from './personalTaskModel';

export interface ResponseModel {
  success: boolean;
  msg: {
    response: string;
    userTasks:{
      name:string,
      tasks: personalTaskModel[];
    }
  };
}
