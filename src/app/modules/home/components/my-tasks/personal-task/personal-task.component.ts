import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { personalTaskModel } from 'src/app/models/personalTaskModel';

@Component({
  selector: 'app-personal-task',
  templateUrl: './personal-task.component.html',
  styleUrls: ['./personal-task.component.css']
})
export class PersonalTaskComponent implements OnInit {
  @Input() taskInput: personalTaskModel;
  @Output() taskToUpdate = new EventEmitter();
  @Output() taskToDelete = new EventEmitter();
  @Output() taskToShare = new EventEmitter();

  isUpdate: boolean;

  constructor() {}

  ngOnInit() {}

  edit() {
    this.isUpdate = true;
  }

  editTask(updateForm) {
    // verifying the input (can not be empty)
    if (updateForm.invalid) return alert('please write your updated comment');

    let newTask = {
      task_id: this.taskInput.task._id,
      editedTask: updateForm.value.editedTask
    };

    this.taskToUpdate.emit(newTask)

    this.isUpdate = !this.isUpdate;
  }

  deleteTask(){
    if (confirm('are you sure you want to delete this task?')){
      this.taskToDelete.emit(this.taskInput.task._id)
    }
  }

  shareTask(shareForm){
    // verifying the input (can not be empty)
    if (shareForm.invalid) return alert('please write the email of recipient correctly');

    let taskToShare = {
      task_id: this.taskInput.task._id,
      emailOfRecipient: shareForm.value.emailOfRecipient
    };

    this.taskToShare.emit(taskToShare)

  }

}
