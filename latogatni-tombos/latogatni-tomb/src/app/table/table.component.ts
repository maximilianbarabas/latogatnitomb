/* File: app.component.css
Author: Barrabas Maximilian
Copyright: 2022, Barabas Maximilian 
Group: Szoft 2 N
Date: 2023.01.10
Github: https://github.com/maximilianbarabas
Licenc: GNU GPL */


import { Component, OnInit } from '@angular/core';
import { TableModel } from 'src/models/TableModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor() {}

  data: TableModel[] = [

    { nev: "Székesfehérvár	", megye: "Fejér", Terulet: "170.89km", Nepesseg:"95545"},

    { nev: "Szombathely	", megye: "Vas", Terulet: "94,5 km", Nepesseg:"2134"},

    { nev: "Sopron	", megye: "Győr-Moson-Sopron", Terulet: "120.89km", Nepesseg:"244"},

    { nev: "Zalaegerszeg	", megye: "Zala", Terulet: "70.km98", Nepesseg:"34545"},

    { nev: "Sárvár	", megye: "Vas", Terulet: "92.9km", Nepesseg:"9565"},
  
    { nev: "Lenti	", megye: "Zala", Terulet: "23.8km", Nepesseg:"85995"},

    { nev: "Zalakaros	", megye: "Zala", Terulet: "10.89km", Nepesseg:"545"}

  ];
}
