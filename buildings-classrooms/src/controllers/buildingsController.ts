import { Request, Response } from "express";
import { APIErrors, sendError } from "../errors/errors";
import * as buildingsService from "../services/buildingsService";
import BuildingsValidations from "../validations/buildingsValidations";

export async function getAll(req: Request, res: Response) {
  const validation = BuildingsValidations.SearchOrPatchBuilding.validate(
    req.query
  );
  if (validation.error) {
    sendError(res, APIErrors.INPUT_VALIDATION_ERROR, validation.error.message);
    return;
  }
  try {
    const buildings = await buildingsService.getAll(req.query);
    res.status(200).send(buildings);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const building = await buildingsService.getById(req.params.id);
    if (building) {
      res.status(200).send(building);
    } else {
      sendError(res, APIErrors.NOT_FOUND);
    }
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function create(req: Request, res: Response) {
  const validation = BuildingsValidations.createOrUpdateBuilding.validate(
    req.body
  );
  if (validation.error) {
    sendError(res, APIErrors.INPUT_VALIDATION_ERROR, validation.error.message);
    return;
  }
  try {
    const building = await buildingsService.create(req.body);
    res.status(201).send(building);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function updateById(req: Request, res: Response) {
  const validation = BuildingsValidations.createOrUpdateBuilding.validate(
    req.body
  );
  if (validation.error) {
    sendError(res, APIErrors.INPUT_VALIDATION_ERROR, validation.error.message);
    return;
  }
  try {
    const building = await buildingsService.updateById(req.params.id, req.body);
    if (building) {
      res.status(200).send(building);
    } else {
      sendError(res, APIErrors.NOT_FOUND);
    }
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function patchById(req: Request, res: Response) {
  const validation = BuildingsValidations.SearchOrPatchBuilding.validate(
    req.body
  );
  if (validation.error) {
    sendError(res, APIErrors.INPUT_VALIDATION_ERROR, validation.error.message);
    return;
  }
  try {
    const building = await buildingsService.updateById(req.params.id, req.body);
    if (building) {
      res.status(200).send(building);
    } else {
      sendError(res, APIErrors.NOT_FOUND);
    }
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    const building = await buildingsService.deleteById(req.params.id);
    if (building) {
      res.status(200).send(building);
    } else {
      sendError(res, APIErrors.NOT_FOUND);
    }
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}
