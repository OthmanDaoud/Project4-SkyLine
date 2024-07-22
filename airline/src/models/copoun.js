export class Copoun {
  constructor({
    copounID,
    expiration,
    discountPercentage,
    isUsed,
    description,
    isExpired,
  }) {
    this.copounCode = copounID;
    this.expiration = expiration;
    this.discountPercentage = discountPercentage;
    this.isUsed = isUsed;
    this.description = description;
    this.isExpired = isExpired;
  }
}
