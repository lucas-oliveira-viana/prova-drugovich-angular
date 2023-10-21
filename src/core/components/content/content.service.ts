import { Injectable } from "@angular/core";
import { ScreenEnum } from "src/shared/constants";

@Injectable()
export class ContentService {

    currentScreen = ScreenEnum.LIST;

    constructor() { }
}