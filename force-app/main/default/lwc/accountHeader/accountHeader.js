import { LightningElement, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";
import { loadScript } from "lightning/platformResourceLoader";
import moment from "@salesforce/resourceUrl/moment";
import getAccountList from "@salesforce/apex/AccountClass.getAccountList";
import updateAccount from "@salesforce/apex/AccountClass.updateAccount";
export default class AccountHeader extends LightningElement {
  columns = [];
  accountList;
  showText = false;
  isModalOpen = false;
  row;
  data;
  load = false;

  @wire(getAccountList)
  getAccountList(response) {
    console.log(response.data);
    this.data = response;
    if (this.data.data) {
      this.accountList = this.data.data.map(({ ...x }) => {
        x.Date__c =
          x.Date__c !== undefined ? this.loadDateMoment(x.Date__c) : "";
        return x;
      });
    }
  }

  renderedCallback() {
    if (this.load) {
      return;
    }
    this.load = true;

    loadScript(this, moment)
      .then(() => {
        window.moment();
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }

  loadDateMoment = (date) => {
    return window.moment(date).format("DD/MM/YYYY");
  };

  handleClick = () => {
    if (!this.showText) {
      this.showText = true;
      let accountKey = this.accountList[0];
      Object.keys(accountKey).forEach((key, i) =>
        this.columns.push({ displayName: key, Id: i })
      );
      this.columns.push({ displayName: "Action", Id: this.columns.length });
    }
  };

  handleEvent = (event) => {
    this.isModalOpen = true;
    this.row = event.detail;
  };

  handleClose = () => {
    this.isModalOpen = false;
  };

  handleSubmit = (event) => {
    let data = JSON.parse(JSON.stringify(event.detail));
    updateAccount({ recordToUpdate: data })
      .then(() => {
        this.isModalOpen = false;
        return refreshApex(this.data);
      })
      .catch((error) => console.log("error", error));
  };
}
