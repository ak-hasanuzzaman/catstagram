import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/Cat';
import { CatService } from 'src/app/cats/services/cat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css'],
})
export class EditCatComponent implements OnInit {
  catForm: FormGroup;
  catId: string;
  cat: Cat;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private catService: CatService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.catForm = this.fb.group({
      id: [''],
      description: [''],
      imageUrl: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.catId = params.id;
      this.catService.getCat(this.catId).subscribe((res) => {
        this.cat = res;
        this.catForm = this.fb.group({
          id: [this.cat.id],
          imageUrl: [this.cat.imageUrl],
          description: [this.cat.description],
        });
      });
    });
  }

  editCat() {
    this.catService.editCat(this.catForm.value).subscribe((res) => {
      this.toastr.success('saved');
      this.router.navigate(['cats']);
    });
  }
}
