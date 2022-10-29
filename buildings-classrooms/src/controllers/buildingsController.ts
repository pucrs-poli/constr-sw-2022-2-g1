import { Request, Response } from "express";
import { APIErrors, sendError } from "../errors/errors";
import IBuilding from "../interfaces/IBuilding";
import * as buildingsService from "../services/buildingsService";

export async function getAll(req: Request, res: Response) {
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
  try {
    const building = await buildingsService.create(req.body as IBuilding);
    res.status(201).send(building);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    const building = await buildingsService.updateById(
      req.params.id,
      req.body as IBuilding
    );
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
