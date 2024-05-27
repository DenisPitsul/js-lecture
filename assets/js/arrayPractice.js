function Phone(id, brand, model, makeYear, color, isNfc, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.makeYear = makeYear;
    this.color = color;
    this.isNfc = isNfc;
    this.price = price;
}

const phones = [];
const PHONES_COUNT = 10;

for (let i = 0; i < PHONES_COUNT; i++) {
    const phone = new Phone(
        i + 1,
        Math.random() > 0.5 ? "Samsung" : "IPhone",
        `Series ${Math.trunc(Math.random() * 20)}`,
        2015 + Math.trunc(Math.random() * 10),
        Math.random() > 0.5 ? "white" : "black",
        Math.random() > 0.5,
        5000 + Math.trunc(Math.random() * 7000)
    );

    phones.push(phone);
}

console.table(phones);

const somePhones = phones.filter(p => p.price > 8000);
console.table(somePhones);

const phones2018 = phones.filter(phone => phone.makeYear === 2018);
console.table(phones2018);

phones.forEach((phone) => {
    document.write(`brand ${phone.brand}: model ${phone.model} year ${phone.makeYear} <br><br>`);
});

id10thPhoneIndex = phones.findIndex((phone) => phone.id === 10);
phones.splice(id10thPhoneIndex, 1);

const discountedPhones = phones.map(p => {
    p.price *= 0.95;
    return p;
})
console.table(discountedPhones);

phones.filter(p => p.isNfc)
    .forEach(p => console.log(`${p.brand} ${p.model}`));

const iPhones2016 = phones.filter(p => p.brand === 'IPhone' && p.makeYear === 2016);
console.table(iPhones2016);

const isGoldPhone = phones.some((phone) => phone.color === 'gold');
console.log(isGoldPhone);

const areAllYounger2013 = phones.every((phone) => phone.makeYear > 2013);
console.log(areAllYounger2013);

const areAllWhiteIphonesWithNfc = phones
  .filter((phone) => phone.brand === "IPhone" && phone.color === "white")
  .every((phone) => phone.isNfc);
console.log(areAllWhiteIphonesWithNfc);