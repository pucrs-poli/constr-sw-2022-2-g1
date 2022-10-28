import { Request, Response } from "express";
import { APIErrors, sendError } from "../errors/errors";
import * as classroomsService from "../services/clasroomsService";

export async function getAll(_req: Request, res: Response) {
  try {
    const classrooms = await classroomsService.getAll();
    res.status(200).send(classrooms);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const classroom = await classroomsService.getById(req.params.id);
    if (classroom) {
      res.status(200).send(classroom);
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
    const classroom = await classroomsService.create(req.body);
    res.status(201).send(classroom);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}
