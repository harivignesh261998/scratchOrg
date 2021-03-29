import { LightningElement } from "lwc";

export default class AccountList extends LightningElement {
  accountList = [
    {
      MailingCity: "Palmdale",
      LastName: "Collingwood",
      Email: "gcollingwood60@psu.edu",
      HomePhone: "661-289-5705",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb5IAC"
    },
    {
      MailingCity: "Fairbanks",
      LastName: "Offield",
      Email: "doffield5x@sohu.com",
      HomePhone: "907-907-2067",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb2IAC"
    },
    {
      MailingCity: "Springfield",
      LastName: "Paler1",
      Email: "hpaler5u@e-recht24.de",
      HomePhone: "217-187-0121",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpazIAC"
    },
    {
      MailingCity: "Tulsa",
      LastName: "Gammel",
      Email: "agammel8@pagesperso-orange.fr",
      HomePhone: "918-827-7587",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXjIAK"
    },
    {
      MailingCity: "Dallas",
      LastName: "Barthod",
      Email: "sbarthod64@ihg.com",
      HomePhone: "469-931-5407",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb9IAC"
    },
    {
      MailingCity: "Louisville",
      LastName: "Pavlovsky",
      Email: "mpavlovsky63@ameblo.jp",
      HomePhone: "502-430-1056",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb8IAC"
    },
    {
      MailingCity: "Buffalo",
      LastName: "Wauchope",
      Email: "bwauchope5y@kickstarter.com",
      HomePhone: "716-731-7771",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb3IAC"
    },
    {
      MailingCity: "El Paso",
      LastName: "test",
      Email: "cscandwright5w@cnn.com",
      HomePhone: "7339121912",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb1IAC"
    },
    {
      MailingCity: "Memphis",
      LastName: "testing",
      Email: "lmollettk@pcworld.com",
      HomePhone: "901-180-0279",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXvIAK"
    },
    {
      MailingCity: "Brooklyn",
      LastName: "Florey",
      Email: "kflorey61@un.org",
      HomePhone: "212-191-9761",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb6IAC"
    },
    {
      MailingCity: "Columbus",
      LastName: "Cosker",
      Email: "mcosker62@auda.org.au",
      HomePhone: "614-853-0754",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb7IAC"
    },
    {
      MailingCity: "Fort Wayne",
      LastName: "Renzini",
      Email: "brenzini5z@elegantthemes.com",
      HomePhone: "260-394-7811",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb4IAC"
    },
    {
      MailingCity: "Davenport",
      LastName: "Spiniello",
      Email: "ispiniello5t@com.com",
      HomePhone: "563-235-5931",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpayIAC"
    },
    {
      MailingCity: "Washington",
      LastName: "Tester",
      Email: "ftester5v@bloglines.com",
      HomePhone: "202-539-0426",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpb0IAC"
    },
    {
      MailingCity: "Philadelphia",
      LastName: "Gilffilland",
      Email: "dgilffillandl@statcounter.com",
      HomePhone: "267-779-4248",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXwIAK"
    },
    {
      MailingCity: "Las Vegas",
      LastName: "Baumadier",
      Email: "lbaumadierj@vkontakte.ru",
      HomePhone: "702-542-3475",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXuIAK"
    },
    {
      MailingCity: "Gainesville",
      LastName: "Richardes",
      Email: "mrichardesi@newsvine.com",
      HomePhone: "352-209-9620",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXtIAK"
    },
    {
      MailingCity: "Salem",
      LastName: "Carnow",
      Email: "mcarnowh@mlb.com",
      HomePhone: "503-866-6518",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXsIAK"
    },
    {
      MailingCity: "Irvine",
      LastName: "Kobsch",
      Email: "jkobschg@pagesperso-orange.fr",
      HomePhone: "714-980-4948",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXrIAK"
    },
    {
      MailingCity: "Birmingham",
      LastName: "Dyball",
      Email: "jdyballf@ebay.com",
      HomePhone: "205-510-5641",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXqIAK"
    },
    {
      MailingCity: "Washington",
      LastName: "Worsnop",
      Email: "aworsnopd@lycos.com",
      HomePhone: "202-591-6923",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXoIAK"
    },
    {
      MailingCity: "El Paso",
      LastName: "Matson",
      Email: "cmatsonc@marriott.com",
      HomePhone: "915-668-9787",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpXnIAK"
    },
    {
      MailingCity: "Kansas City",
      LastName: "Peatt",
      Email: "apeatt83@deviantart.com",
      HomePhone: "816-313-2705",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpcIIAS"
    },
    {
      MailingCity: "Colorado Springs",
      LastName: "Eathorne",
      Email: "beathorne82@wired.com",
      HomePhone: "719-530-8863",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpcHIAS"
    },
    {
      MailingCity: "Yonkers",
      LastName: "Ogelsby",
      Email: "togelsby81@miitbeian.gov.cn",
      HomePhone: "914-647-6428",
      CreatedById: "005J000000AkXwkIAF",
      Id: "003J000001zLpcGIAS"
    }
  ];

  headerItem = [
    { label: "Last Name", Id: "1" },
    { label: "Home Phone", Id: "2" },
    { label: "Email", Id: "3" },
    { label: "MailingCity", Id: "4" }
  ];
}
