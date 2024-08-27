import { Injectable } from '@angular/core';
import {Transport, Transports} from "../../data/mock-transport-list";

@Injectable({
  providedIn: 'root'
})
export class TransportСompanyService {
  getTrans(): Transport[] {
    return Transports;
  }

  getTransData(id: number) {
    return Transports.find(t => t.id === id);
  }
  constructor() { }
}
