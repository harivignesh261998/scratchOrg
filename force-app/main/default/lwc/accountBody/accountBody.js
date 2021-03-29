import { api, LightningElement } from "lwc";

export default class AccountBody extends LightningElement {
  @api row;
  @api col;
  index = -1;
  formatedDate;
  dateResult;
  loaded = false;

  get columns() {
    return JSON.parse(JSON.stringify(this.col));
  }

  get result() {
    if (this.index === this.columns.length - 2) {
      this.index = -1;
    }
    ++this.index;
    return this.row[this.columns[this.index].displayName];
  }

  handleClick = () =>
    this.dispatchEvent(new CustomEvent("edits", { detail: this.row }));
}
