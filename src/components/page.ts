import { Component } from "./base/component";
import { IEvents } from "./base/events";
import { ensureElement } from "../utils/utils";
import { IPage } from "../types";

export class Page extends Component<IPage> {
  counter: number;
  catalog: HTMLElement[];
  locked: boolean;

  protected _counter: HTMLElement;
  protected _catalog: HTMLElement;
  protected _basketButton: HTMLElement;
  protected _pageWrapper: HTMLElement;

  constructor(element: HTMLElement, events: IEvents) {
    super(element, events);
    this._counter = ensureElement<HTMLElement>(".header__basket-counter");
    this._catalog = ensureElement<HTMLElement>(".gallery");
    this._basketButton = ensureElement<HTMLElement>(".header__basket");
    this._pageWrapper = ensureElement<HTMLElement>(".page__wrapper");
  }
}