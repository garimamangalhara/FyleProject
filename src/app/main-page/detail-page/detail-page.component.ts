import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  public bankData: any
  constructor(private service: MainPageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBankDetails()
  }
  getBankDetails() {
    let url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI "
    this.service.getBankDetails(url).subscribe(response => {
      let bankDetailList = response;
      let ifsc = this.route.snapshot.params['bankIfsc']
      console.log("response", bankDetailList)
      for (var i = 0; i < bankDetailList.length; i++) {
        if (bankDetailList[i].ifsc == ifsc) {
          this.bankData = bankDetailList[i];
          break;
        }
      }
    })
  }
}
