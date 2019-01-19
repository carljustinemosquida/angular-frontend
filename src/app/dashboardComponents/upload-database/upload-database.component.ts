import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-upload-database',
  templateUrl: './upload-database.component.html',
  styleUrls: ['./upload-database.component.scss']
})
export class UploadDatabaseComponent implements OnInit {

  private filesToUpload = null;
  public message = '';
  data:any
  

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() { }

  files(files) {
    this.message = '';
    this.filesToUpload = files;
  }

  upload(uploadForm: NgForm) {
    const authToken = this.auth.returnToken();
    const formData = new FormData();
    const files = this.filesToUpload;
    for (let i = 0; i < files.length; i++) {
      formData.append(`file${i}`, files.item(i), files.item(i).name);
    }
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': authToken
      })
    }

    this.http.post<any>('http://localhost:3000/api/voters/import', formData, httpOption).subscribe(data =>{
      this.data = data;
      alert(data.success);
      
    }); 

    uploadForm.resetForm();

  }

}
