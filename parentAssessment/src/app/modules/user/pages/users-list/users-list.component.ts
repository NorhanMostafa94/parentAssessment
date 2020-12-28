import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from '../../models/user';
import { UserLogicService } from '../../services/user-logic.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  userDetails: User;

  userDetailsId: string;

  isDetailsPreview: boolean;

  modalRef: BsModalRef;

  isEditMode: boolean;

  userForm: FormGroup;

  isSubmitted: boolean;


  constructor(private userLogicService: UserLogicService,
    private modalService: BsModalService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.initUserForm();

  }

  getUsersList() {
    this.userLogicService.getUsersList(this.userLogicService.payload).subscribe(res => {
      this.users = res['data'];
    })
  }

  getUserDetails(id) {
    this.userDetailsId = id;
    this.userLogicService.getUserDetails(id).subscribe(res => {
      this.isDetailsPreview = true;
      this.userDetails = res['data'];
    });
  }

  closeDetails(isClose) {
    this.isDetailsPreview = false;
  }

  edit(template: TemplateRef<any>,id) {
    this.userDetailsId = id;
    this.isEditMode = true;
    this.modalRef = this.modalService.show(template);
    if (this.isEditMode) {
      this.name.setValue(this.userDetails.first_name)
    }
  }

  add(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.isEditMode = false;
  }

  /**
   * `inituserForm()` to initate login form
   */
  initUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });

  }

  get name() {
    return this.userForm.get('name') as FormControl;
  }

  get job() {
    return this.userForm.get('job') as FormControl;
  }

  loadMore() {
    this.userLogicService.payload.page++;
    this.userLogicService.getUsersList(this.userLogicService.payload).subscribe(res => {
      this.users = this.users.concat(res['data']);
    });
  }

  save() {
    this.isSubmitted = true;
    if (!this.isEditMode) {

      this.userLogicService.createUser(this.userForm.value).subscribe(res => {
        if (res) {
          this.alertService.show('success', 'Success', 'User has been added successfully')
          this.modalRef.hide();
        }
      })
    }
    else{
    this.userLogicService.updateUser(this.userDetailsId,this.userForm.value).subscribe(res=>{
      if(res){
        this.alertService.show('success', 'Success', 'User has been updated successfully')
        this.modalRef.hide();
      }
    })
    }
  }



}
