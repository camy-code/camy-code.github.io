import { Service } from "@angular/core";

@Service()
export class ColorService {
    primary = "white";
    secondary = "black";

    getPrimary ():string {
        return this.primary;
    }
     getSecondary ():string {
        return this.secondary;
    }
}