import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { URL_REGEX } from '../../utils/constants';
import { Store } from '@ngrx/store';
import * as AdminActions from '../../store/admin.actions';
import { CreatedVideo } from '../../models/createdVideo';
import { getCreatedVideos } from '../../store/index';
import { State } from '../../store/admin.reducer';
import { Observable } from 'rxjs';
import { FormErrors } from '../../models/form-errors-enum';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  createCardForm!: FormGroup;

  isCardCreated: boolean = false;

  videos$!: Observable<CreatedVideo[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.createCardForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      image: new FormControl('', [Validators.required, Validators.pattern(`${URL_REGEX}`)]),
      link: new FormControl('', [Validators.required, Validators.pattern(`${URL_REGEX}`)]),
      date: new FormControl('', [Validators.required, this.dateValidador]),
    });
    this.videos$ = this.store.select(getCreatedVideos);
  }

  get title() {
    return this.createCardForm.get('title');
  }

  get description() {
    return this.createCardForm.get('description');
  }

  get image() {
    return this.createCardForm.get('image');
  }

  get link() {
    return this.createCardForm.get('link');
  }

  get date() {
    return this.createCardForm.get('date');
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.createCardForm.valid) {
      this.isCardCreated = true;
      const video: CreatedVideo = { title: this.title?.value, description: this.description?.value, image: this.image?.value, link: this.link?.value, date: this.date?.value };
      this.store.dispatch(AdminActions.adminAddVideo(video));
      this.videos$ = this.store.select(getCreatedVideos);
      this.createCardForm.reset();
      formDirective.resetForm();
    }
  }

  get TitleErrorMessage() {
    if (this.title?.hasError('required')) {
      return FormErrors.TITLE_REQUIRED;
    }
    if (this.title?.hasError('minlength')) {
      return FormErrors.TITLE_MIN_LENGTH;
    }
    return this.title?.hasError('maxlength') ? FormErrors.TITLE_MAX_LANGTH : '';
  }

  get ImgeErrorMessage() {
    if (this.image?.hasError('required')) {
      return FormErrors.IMAGE_LINK_REQUIRED;
    }
    return this.image?.hasError('pattern') ? FormErrors.LINK_INVALID : '';
  }

  get LinkVideoErrorMessage() {
    if (this.link?.hasError('required')) {
      return FormErrors.VIDEO_LINK_REQUIRED;
    }
    return this.link?.hasError('pattern') ? FormErrors.LINK_INVALID : '';
  }

  get DateErrorMessage() {
    
    if (this.date?.hasError('required')) {
      return FormErrors.DATE_REQUIRED;
    } 
    if (this.date!.hasError('dateValid') ) {
      return FormErrors.DATE_INVALID;
    }
  }

  dateValidador(control: FormControl) {
    const today = new Date();
    if (control.value > today) {
      return { dateValid: true };
    } else {
      return null;
    }
  }
}
