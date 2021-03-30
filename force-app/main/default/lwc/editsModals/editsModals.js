import { LightningElement, api } from "lwc";

export default class EditsModals extends LightningElement {
  @api modalOpen;
  @api row;
  @api col;
  editedValue = {};
  index = 0;
  indexOne = 0;

  get columns() {
    let col = JSON.parse(JSON.stringify(this.col));
    col.pop();
    return col;
  }
  get result() {
    return this.row[this.columns[++this.index].displayName];
  }

  closeModal = () => {
    this.dispatchEvent(new CustomEvent("mclose"));
  };

  submitDetails = () => {
    this.columns.forEach((x) => {
      if (this.editedValue[x.displayName] === undefined) {
        this.editedValue[x.displayName] = this.row[x.displayName];
      }
      if (
        x.displayName === "Date__c" &&
        this.editedValue[x.displayName] !== undefined
      ) {
        this.editedValue[x.displayName] = window
          .moment(this.editedValue[x.displayName], "DD/MM/YYYY")
          .format("YYYY-MM-DD");
      }
    });
    console.log(JSON.parse(JSON.stringify(this.editedValue)));
    this.dispatchEvent(
      new CustomEvent("msubmit", {
        detail: JSON.parse(JSON.stringify(this.editedValue))
      })
    );
  };

  handleChange = (event) => {
    let item = this.columns.filter((x) => x.displayName === event.target.name);
    this.editedValue[item[0].displayName] = event.target.value;
  };
}
