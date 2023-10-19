import { Inject, Injectable } from "@nestjs/common";
import { CASHIFY, CashifyService } from "nestjs-cashify";
import { Cashify } from "cashify";

Injectable();
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getHelloAgain() {
    return "Hello World Again!";
  }

  constructor(@Inject(CASHIFY) private cashify: Cashify) {
    const result2 = this.cashify.convert(10, { from: "EUR", to: "USD" });
    console.log(result2, "test");
  }
}
