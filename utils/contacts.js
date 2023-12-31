const fs = require("fs");

const dirPath = "./data";
!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : null;
const dataPath = "./data/contacts.json";
!fs.existsSync(dataPath) ? fs.writeFileSync(dataPath, "[]", "utf-8") : null;

// ambil semua data di contact.json
const loadContact = () => {
  const fileBuffer = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

// menuliskan / menimpa file contact.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// menambahkan data kontak baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat };
