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

  userDetails: User = {
    id: '',
    avatar: '',
    email: '',
    first_name: '',
    last_name: ''
  };

  userDetailsId: string;

  isDetailsPreview: boolean;

  modalRef: BsModalRef;

  isEditMode: boolean;

  userForm: FormGroup;

  isSubmitted: boolean;

  showLoading: boolean;


  constructor(private userLogicService: UserLogicService,
    private modalService: BsModalService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.getUsersList();

  }

  /**
 * `getUsersList()` to get users list from api
 */
  getUsersList() {
    this.showLoading = true;
    this.userLogicService.getUsersList(this.userLogicService.payload).subscribe(res => {
      this.showLoading = false;
      this.users = res['data'];
    })
  }

  /**
   * `getUserDetails()` to get user details when click on card
   */
  getUserDetails(id, user) {
    this.userDetailsId = id;
    this.userDetails = user;
    this.isDetailsPreview = true;
  }

  /**
   * `loadMore()` to load more users in list
   */
  loadMore() {
    this.showLoading = true;
    this.userLogicService.payload.page++;
    this.userLogicService.getUsersList(this.userLogicService.payload).subscribe(res => {
      this.showLoading = false;
      this.users = this.users.concat(res['data']);
    });
  }

  /**
   * `closeDetails()` to close details
   * @param isClose 
   */
  closeDetails(isClose) {
    this.isDetailsPreview = isClose;
    this.userDetailsId = '';
  }

  /**
   * `inituserForm()` to initate login form
   */
  initUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });

  }

  get name() {
    return this.userForm.get('name') as FormControl;
  }

  get lastName() {
    return this.userForm.get('lastName') as FormControl;
  }

  /**
   * `edit()` to open edit model with user details
   * @param template 
   * @param id 
   */
  edit(user: User, template: TemplateRef<any>) {
    this.initUserForm();
    this.userDetailsId = user.id;
    this.isEditMode = true;
    this.userDetails = user;
    // this.isDetailsPreview = true;
    this.userLogicService.getUserDetails(user.id).subscribe(res => {

    })
    if (this.isEditMode) {
      this.userForm.reset({
        name: user.first_name,
        lastName: user.last_name
      })
      this.modalRef = this.modalService.show(template);
    }
  }

  /**
   * `add()` to open add modal
   * @param template 
   */
  add(template: TemplateRef<any>) {
    this.initUserForm();
    this.modalRef = this.modalService.show(template);
    this.isEditMode = false;
  }

  delete(user, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.userDetails = user;
  }

  deleteUser(id) {
    this.userLogicService.deleteUser(id).subscribe(res => {
      this.alertService.show('success', 'Success', 'User has been deleted successfully');
      this.isDetailsPreview = false;
      this.userDetailsId = '';
      this.modalRef.hide();
      this.getUsersList();

    })
  }

  /**
   * `save()` to save form, if isEditMode is true fro edit user, else for add new user
   */
  save() {
    this.isSubmitted = true;
    if (!this.isEditMode) {

      this.userLogicService.createUser(this.userForm.value).subscribe(res => {
        if (res) {
          this.isDetailsPreview = false;
          this.userDetailsId = '';
          this.alertService.show('success', 'Success', 'User has been added successfully')
          this.modalRef.hide();
        }
      })
    }
    else {
      this.userLogicService.updateUser(this.userDetailsId, this.userForm.value).subscribe(res => {
        if (res) {
          this.isDetailsPreview = false;
          this.userDetailsId = '';
          this.alertService.show('success', 'Success', 'User has been updated successfully')
          this.modalRef.hide();
        }
      })
    }
    this.getUsersList();
  }

  /**
   * `cancel()` to cancel form and close it
   */
  cancel() {
    this.isDetailsPreview = false;
    this.userDetailsId = '';
    this.modalRef.hide();
    this.initUserForm();
  }

  ngOnDestroy() {
    this.userLogicService.payload.page = 1;
  }

}
