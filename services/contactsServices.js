import Contact from "../models/contact.js";


export const listContacts = async () => {
  return await Contact.findAll();
};


export const getContactById = async (id) => {
  return await Contact.findByPk(id);
};


export const addContact = async (data) => {
  return await Contact.create(data);
};


export const removeContact = async (id) => {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;

  await Contact.destroy({ where: { id } });

  return contact;
};


export const updateContact = async (id, data) => {
  const [updated] = await Contact.update(data, {
    where: { id },
  });

  if (!updated) return null;

  return await Contact.findByPk(id);
};


export const updateStatusContact = async (id, data) => {
  const [updated] = await Contact.update(data, {
    where: { id },
  });

  if (!updated) return null;

  return await Contact.findByPk(id);
};
