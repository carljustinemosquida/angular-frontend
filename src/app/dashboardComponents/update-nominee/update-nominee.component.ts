import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {NominateService} from '../../nominate.service';
import {interval} from 'rxjs';

export interface INominee {
  position: string;	
  name: string;
  lrn: string;	
  party: string;
}

@Component({
  selector: 'app-update-nominee',
  templateUrl: './update-nominee.component.html',
  styleUrls: ['./update-nominee.component.scss']
})
export class UpdateNomineeComponent implements OnInit {
  
  candidateData: any;
  interval;

  constructor(private nominate: NominateService){

  } 
  
  ngOnInit() {
    this.onFetch();
  }

  displayedColumns: string[] = ['POSITION', 'LRN', 'CANDIDATE NAME','PARTYLIST', "GRADE LEVEL", "SECTION", "UPDATE", "REMOVE" ];

  onFetch(){
    this.nominate.fetchNominee().subscribe(data => this.candidateData = data);
  }

  onUpdate(id, lrn, fullName, party, gradeLevel, section, position){
    const candidate = {
      lrn: lrn,
      fullName: fullName,
      party: party,
      gradeLevel: gradeLevel,
      section: section,
      position: position
    }
   
    this.nominate.updateNominee(candidate, id).subscribe(data => console.log(data));
    this.onFetch();
  }

  onDelete(id){
   this.nominate.deleteNominee(id).subscribe(data => console.log(data));
   this.onFetch();
  }

}
