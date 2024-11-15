import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfComponent } from "../pdf/pdf.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pdfs',
  standalone: true,
  imports: [PdfComponent,NgFor],
  templateUrl: './pdfs.component.html',
  styleUrl: './pdfs.component.scss'
})
export class PdfsComponent implements OnInit   
 {
  items = [
    {
      image: 'path_to_image1.jpg',
      title: 'Card title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      image: 'path_to_image2.jpg',
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    }
    // Add more items as needed
  ];
  
  collegeId!: number;
  yearId!: number;
  branchId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collegeId = +params['collegeId'];
      this.yearId = +params['yearId'];
      this.branchId = +params['branchId'];
    });
  }

  printval(){
    console.log(this.collegeId)
    console.log(this.yearId)
    console.log(this.branchId)
  }
}