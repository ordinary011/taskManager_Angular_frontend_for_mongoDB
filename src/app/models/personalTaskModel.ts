export interface personalTaskModel {
  _id: string;
  info: string;
  task: {
    _id: string;
    taskText: string;
  };
}

