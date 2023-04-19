import express from "express";
import personController from "../controllers/person.controller.js";

const router = express.Router({ mergePrams: true});

router.get("/:personId/medias", personController.personMesdias);

router.get("/:personId", personController.personDetail);
export default router;