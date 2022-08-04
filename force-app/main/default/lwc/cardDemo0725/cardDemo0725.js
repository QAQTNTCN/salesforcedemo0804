import { LightningElement } from "lwc";

import getOrgList from "@salesforce/apex/OrgManagementController.getOrgList";

export default class CardDemo0725 extends LightningElement {
  orgs = [];

  connectedCallback() {
    getOrgList()
      .then((res) => {
        let res1 = JSON.parse(JSON.stringify(res));
        res1.forEach((element) => {
          if (element.Org_user__r) {
            element.hasUser = true;
            element.firstUserName = element.Org_user__r[0].Name;
          } else {
            element.hasUser = false;
          }
        });
        console.log(res1);

        this.orgs = res1;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
