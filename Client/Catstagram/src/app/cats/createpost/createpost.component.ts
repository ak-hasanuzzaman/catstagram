import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/cats/services/cat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent {
  catForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private catService: CatService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.catForm = this.fb.group({
      imageUrl: ['', Validators.required],
      description: [''],
    });
  }

  get imageUrl() {
    return this.catForm.get('imageUrl');
  }

  create() {
    this.catService.create(this.catForm.value).subscribe((res) => {
      this.toastr.success('saved');
      this.router.navigate(['cats']);
    });
  }
}
