import { autoinject, bindable, observable } from "aurelia-framework";

@autoinject
export class Testcomp {
  increment() {
	ourlog.log("Increment called");
    console.log(Object.getOwnPropertyDescriptor(this, "classOnlyField"));
    console.log(Object.getOwnPropertyDescriptor(this, "htmlBoundField"));
    console.log(Object.getOwnPropertyDescriptor(Testcomp.prototype, "classOnlyField"));
    console.log(Object.getOwnPropertyDescriptor(Testcomp.prototype, "htmlBoundField"));
    this.htmlBoundField++;
    this.classOnlyField++;
  }
  attached() {
	ourlog.log("Attached");
  }
  @observable htmlBoundField: number = 1234;
  htmlBoundFieldChanged(newValue: any, oldValue: any) {
    ourlog.log(`htmlBoundFieldChanged from: ${oldValue} to: ${newValue}`);
  }
  @observable classOnlyField: number = 6789;
  classOnlyFieldChanged(newValue: any, oldValue: any) {
    ourlog.log(`classOnlyFieldChanged from: ${oldValue} to: ${newValue}`);
  }
}

export abstract class ourlog {
  public static str = "";

  public static log(val: any) {
    console.log(val);
    let elem = <any>document.getElementById("logarea");
    ourlog.str += `${val}\r\n`;
    if (!elem) return;
    elem.value = ourlog.str;
  }
}
