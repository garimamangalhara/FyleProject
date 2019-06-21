import { Component, OnInit } from '@angular/core';
import { MainPageService } from './main-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public bankDetailList: any = []
  public cols: { field: string; header: string; }[];
  public colsData: any;
  public favoriteBanks: any = []
  public favoriteIfsc: any = []
  public favoriteFlag: any = false;
  public pageSize: any = 10
  public cities: any = []
  constructor(private service: MainPageService, private router: Router) { }
  ngOnInit() {
    this.getBankDetails();
    this.colsData = {
      "ifsc": null,
      "branch": null,
      "address": null,
      "city": null,
      "district": null,
      "state": null,
      "bank_name": null
    }
    this.cities = [{ label: "Please Select", value: "" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Pune", value: "Pune" },
    { label: "Jaipur", value: "Jaipur" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Hyderabad", value: "Hyderabad" }]
    this.cols = [
      { field: 'ifsc', header: 'Ifsc' },
      { field: 'branch', header: 'Branch' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'district', header: 'District' },
      { field: 'state', header: 'State' },
      { field: 'bank_name', header: 'Bank Name' }
    ];
  }
  getFavorites() {
    this.favoriteIfsc = JSON.parse(sessionStorage.getItem('favBanks'))
    console.log(this.favoriteIfsc)
    if (this.favoriteIfsc && this.favoriteIfsc.length) {
      this.favoriteBanks = this.bankDetailList.filter(ele => {
        return this.favoriteIfsc.indexOf(ele.ifsc) !== -1;
      })
    }
    else {
      this.favoriteIfsc = []
    }
  }
  getBankDetails() {
    let url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI "
    this.service.getBankDetails(url).subscribe(response => {
      this.bankDetailList = response;
      console.log("response", this.bankDetailList)
      this.getFavorites();
      let cities = this.bankDetailList.map(ele => ele.city)
      console.log(new Set(cities))
    })
  }
  filterList(field, dt) {
    console.log("dt", dt)
  }
  onRowSelect(e) {
    console.log("selected:", e, this.favoriteBanks)
    this.favoriteIfsc.push(e.data.ifsc)
    sessionStorage.setItem('favBanks', JSON.stringify(this.favoriteIfsc))
    console.log(sessionStorage.getItem('favBanks'))
  }
  onRowUnselect(e) {
    console.log("unSelected:", e, this.favoriteBanks)
    this.favoriteIfsc.splice(this.favoriteIfsc.indexOf(e.data.ifsc))
    sessionStorage.setItem('favBanks', JSON.stringify(this.favoriteIfsc))
  }
  goToDetailsPage(e) {
    this.router.navigate(['bankDetails', e.data.ifsc])
  }
  listFavorites() {
    this.favoriteFlag = true;
  }
  listAll() {
    this.favoriteFlag = false;
  }
}
