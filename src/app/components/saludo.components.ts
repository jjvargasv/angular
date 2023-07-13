import { Component } from "@angular/core";

@Component({
    selector: "como-quiera",  // app_saludo
    templateUrl: `./saludo.components.html`,
    styleUrls: [`./saludo.components.css`]
})
export class Saludo {
    saludo = "hola Mundo desde angular";
}