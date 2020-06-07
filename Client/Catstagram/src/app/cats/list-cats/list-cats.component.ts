import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from 'src/app/cats/services/cat.service';
import { Cat } from '../models/Cat';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.scss']
})
export class ListCatsComponent implements OnInit {
  cats: Array<Cat>;
  constructor(private catService: CatService, private router: Router) { }

  ngOnInit() {
    this.fetchCats();
  }

  fetchCats() {
    this.catService.getCats().subscribe(cats => {
      this.cats = cats;
    });
  }

  editCat(id) {
    this.router.navigate(['cats', id, 'edit']);
  }

  deleteCat(id) {
    this.catService.deleteCat(id).subscribe(res => {
      this.fetchCats();
    });
  }

}
