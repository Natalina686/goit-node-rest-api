
import express from "express";
import * as contactsController from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  addContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContactById);
router.delete("/:id", contactsController.deleteContact);
router.post("/", validateBody(addContactSchema), contactsController.addContact);
router.put("/:id", validateBody(updateContactSchema), contactsController.updateContact);

router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  contactsController.updateFavorite
);

export default router;
