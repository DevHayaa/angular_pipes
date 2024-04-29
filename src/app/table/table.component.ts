import { CommonModule } from '@angular/common';
import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule,FilterPipe,CustomPipePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

@Input()HeadArray :any[] = [];
@Input()UserArray :any[] = [];
@Output() onEdit =new EventEmitter<any>();
@Output() onDelete =new EventEmitter<any>();

searchText: any
inputString: string = '';
constructor(){
  
}
  ngOnInit(): void {
    
  }

  // onSearchChange(searchval:string){
  //   this.filteredData = this.UserArray.filter((searchData:any)=>{
  //     const values = Object.values(searchData);
  //     let found = false;
  //     values.forEach((val:any)=>{
  //       if(val.toString().toLowerCase().indexOf(searchval)>-1){
  //         found = true;
          
  //       }
  //     });
      
  //       return found;
     
  //   });
   
  // }

  edit(user:any){
     this.onEdit.emit(user);
     

  }
 delete(user:any){
  this.onDelete.emit(user)
  
  
  
  }
}
