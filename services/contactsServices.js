import Contact from "../models/contact.js";


export const listContacts = async (owner) => {
  return await Contact.findAll({ where: { owner } });
};


export const getContactById = async (id, owner) => {
  return await Contact.findOne({ where: { id, owner } });
};


export const addContact = async (data) => {
  return await Contact.create(data);
};


export const removeContact = async (id, owner) => {
  const contact = await Contact.findOne({ where: { id, owner } });
  if (!contact) return null;

  await Contact.destroy({ where: { id, owner } });
  return contact;
};


export const updateContact = async (id, data, owner) => {
  const [updated] = await Contact.update(data, { where: { id, owner } });
  if (!updated) return null;
  return await Contact.findOne({ where: { id, owner } });
};


export const updateStatusContact = async (id, data, owner) => {
  const [updated] = await Contact.update(data, { where: { id, owner } });
  if (!updated) return null;
  return await Contact.findOne({ where: { id, owner } });
};
