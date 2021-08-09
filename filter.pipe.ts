import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(members: any[], filters: any): any {
    console.log(members, filters);
    var nameFilters: string[] = [];
    // console.log((filters))
    for (var key in filters) {
      console.log("Key:  " + key);
      nameFilters.push(key);
    }
    // console.log(nameFilters);
    // console.log(nameFilters.length);
    // console.log(nameFilters[0]);

    var lengthFilters = nameFilters.length;
    if(members == undefined ||  members.length == 0 ) {
      return members;
    }
    // console.log(members[0][nameFilters[0]]);

    switch (lengthFilters) {
      case 0:
        return members;
      case 1:
        return members.filter((item) => {
          return (
            (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
            .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 
          );
        });
      case 2:
        return members.filter((item) => {
          return (
            (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
            .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
            (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
            .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0
          );
        });
      case 3:
        return members.filter((item) => {
          return (
            (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
              .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
              (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
              .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0 &&
              (this.tolower(!item[nameFilters[2]] || item[nameFilters[2]])
              .indexOf(this.tolower(filters[nameFilters[2]]))) >= 0 
          );
        });
      case 4:
        return members.filter((item) => {
          return (
            (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
            .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
            (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
            .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0 &&
            (this.tolower(!item[nameFilters[2]] || item[nameFilters[2]])
            .indexOf(this.tolower(filters[nameFilters[2]]))) >= 0 &&
            (this.tolower(!item[nameFilters[3]] || item[nameFilters[3]])
            .indexOf(this.tolower(filters[nameFilters[3]]))) >= 0
          );
        });
      case 5:
        return members.filter((item) => {
          return (
             (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
              .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
            (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
              .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0 &&
            (this.tolower(!item[nameFilters[2]] || item[nameFilters[2]])
            .indexOf(this.tolower(filters[nameFilters[2]]))) >= 0 &&
            (this.tolower(!item[nameFilters[3]] || item[nameFilters[3]])
            .indexOf(this.tolower(filters[nameFilters[3]]))) >= 0 &&
            (this.tolower(!item[nameFilters[4]] || item[nameFilters[4]])
            .indexOf(this.tolower(filters[nameFilters[4]]))) >= 0
          );
        });
      case 6:
        return members.filter((item) => {
          return (
             (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
             .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
            (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
              .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0 &&
            (this.tolower(!item[nameFilters[2]] || item[nameFilters[2]])
              .indexOf(this.tolower(filters[nameFilters[2]]))) >= 0 &&
            (this.tolower(!item[nameFilters[3]] || item[nameFilters[3]])
              .indexOf(this.tolower(filters[nameFilters[3]]))) >= 0 &&
            (this.tolower(!item[nameFilters[4]] || item[nameFilters[4]])
              .indexOf(this.tolower(filters[nameFilters[4]]))) >= 0 &&
            (this.tolower(!item[nameFilters[5]] || item[nameFilters[5]])
            .indexOf(this.tolower(filters[nameFilters[5]]))) >= 0
          );
        });
        case 7:
        return members.filter((item) => {
          return (
            (this.tolower(!item[nameFilters[0]] || item[nameFilters[0]])
              .indexOf(this.tolower(filters[nameFilters[0]]))) >= 0 &&
              (this.tolower(!item[nameFilters[1]] || item[nameFilters[1]])
              .indexOf(this.tolower(filters[nameFilters[1]]))) >= 0 &&
              (this.tolower(!item[nameFilters[2]] || item[nameFilters[2]])
              .indexOf(this.tolower(filters[nameFilters[2]]))) >= 0 &&
              (this.tolower(!item[nameFilters[3]] || item[nameFilters[3]])
              .indexOf(this.tolower(filters[nameFilters[3]]))) >= 0 &&
              (this.tolower(!item[nameFilters[4]] || item[nameFilters[4]])
              .indexOf(this.tolower(filters[nameFilters[4]]))) >= 0 &&
              (this.tolower(!item[nameFilters[5]] || item[nameFilters[5]])
                .indexOf(this.tolower(filters[nameFilters[5]]))) >= 0 &&
                (this.tolower(!item[nameFilters[6]] || item[nameFilters[6]])
              .indexOf(this.tolower(filters[nameFilters[6]]))) >= 0 
          );
        });
    }
  }
  tolower(nombre:any){
    // console.log(nombre)
    if(nombre!="" && nombre!=null && nombre!=undefined && nombre!=true && nombre!=false){
      return (nombre
        .toLowerCase().charAt(0).toUpperCase() + nombre
        .toLowerCase().slice(1));
    }else{
      return ("");
    }
  }
}
