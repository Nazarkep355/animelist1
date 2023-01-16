import {Component, OnInit} from '@angular/core';
import {TitleServiceService} from "./title-service.service";
import {Title} from "../Title";

@Component({
  selector: 'app-titlelist',
  templateUrl: './titlelist.component.html',
  styleUrls: ['./titlelist.component.css']
})
export class TitlelistComponent implements OnInit {
  // @ts-ignore
  titles: Title[]
  name: any;
  searchField:any;
  // @ts-ignore
  options:Title[];

  constructor(private titleService: TitleServiceService) {

  }

  public find() {
    if (this.name!=null&&this.name.length > 0) {
      this.titleService.findByName(this.name).subscribe(value => {
        //@ts-ignore
        this.titles = value.content;
      })
    } else {
      this.titleService.ratingPage().subscribe(value => {
        //@ts-ignore
        this.titles = value.content;
      })
    }
    console.log(this.titles)
  }

  public search(){
    console.log(this.searchField)
    if(this.searchField!=null&&this.searchField.trim().length>0){
      this.titleService.changeOption(this.searchField).subscribe(value => {
        // @ts-ignore
        this.options=value.content;
      })
    }
    else {
      this.options =[]
    }

  }

  ngOnInit(): void {
    this.find()
  }

}
