import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  saveUser() {
    console.log("Saving user", this.model);
    this.dataService.saveUser(this.model);
  }
}
