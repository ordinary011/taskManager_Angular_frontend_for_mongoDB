import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import io from 'socket.io-client';

import { TaskService } from 'src/app/services/task.service';
import { ResponseModel } from 'src/app/models/responseModel';
import { personalTaskModel } from 'src/app/models/personalTaskModel';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  tasks: personalTaskModel[] = [];
  name: string;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskService.findTasks().subscribe((res: ResponseModel) => {
      this.name = res.msg.userTasks.name;
      this.tasks = res.msg.userTasks.tasks;
    });

    socket.on('sharing', res =>
      this.taskService.findTasks().subscribe((res: ResponseModel) => {
        this.tasks = res.msg.userTasks.tasks;
      })
    );
  }

  addTask(taskForm) {
    // we need to check whether our form is valid or not (can not be empty)
    if (taskForm.invalid) return alert('the comment field can not be empty');
    this.taskService.createTask(taskForm.value).subscribe((res: ResponseModel) => {
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['home/myTasks']));
    });
  }

  editTask(taskToUpdate) {
    this.taskService.editTask(taskToUpdate).subscribe((res: ResponseModel) => {
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['home/myTasks']));
    });
  }

  delTask(taskId: string) {
    this.taskService.delTask(taskId).subscribe((res: ResponseModel) => {
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['home/myTasks']));
    });
  }

  shareTask(taskToShare) {
    this.taskService.shareTask(taskToShare).subscribe((res: ResponseModel) => {
      socket.emit('sharing');
    });
  }
}
