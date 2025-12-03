import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.getContactById(id);
    if (!contact) throw HttpError(404, "Not found");
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const addContact = async (req, res, next) => {
  try {
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.removeContact(id);
    if (!contact) throw HttpError(404, "Not found");
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Body must have at least one field");
    }
    const updated = await contactsService.updateContact(id, req.body);
    if (!updated) throw HttpError(404, "Not found");
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      throw HttpError(400, "Missing field favorite");
    }

    const updated = await contactsService.updateStatusContact(id, { favorite });

    if (!updated) throw HttpError(404, "Not found");

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

