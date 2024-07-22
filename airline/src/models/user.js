export class User {
  constructor({ userID, fullName, phoneNumber, email, tickets, copouns }) {
    this.userID = userID;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.tickets = tickets;
    this.copouns = copouns;
  }
}
