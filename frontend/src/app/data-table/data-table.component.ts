import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {this.fetchData()}

  fetchData(){
    this.httpClient
    .get<any[]>('http://localhost:3000/api/users')
    .subscribe((data)=>{
      console.log(data);
      this.data=data;
    });
  }
}
