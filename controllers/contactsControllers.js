import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";


export const getAllContacts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contacts = await contactsService.listContacts(userId);
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const contact = await contactsService.getContactById(id, userId);
    if (!contact) throw HttpError(404, "Not found");
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const addContact = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newContact = await contactsService.addContact({ ...req.body, owner: userId });
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const contact = await contactsService.removeContact(id, userId);
    if (!contact) throw HttpError(404, "Not found");
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Body must have at least one field");
    }
    const updated = await contactsService.updateContact(id, req.body, userId);
    if (!updated) throw HttpError(404, "Not found");
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const updateFavorite = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      throw HttpError(400, "Missing field favorite");
    }

    const updated = await contactsService.updateStatusContact(id, { favorite }, userId);

    if (!updated) throw HttpError(404, "Not found");

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

