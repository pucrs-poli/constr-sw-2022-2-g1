import { Request, Response } from "express";
import { APIErrors, sendError } from "../errors/errors";
import IClassroom from "../interfaces/IClassroom";
import * as classroomsService from "../services/clasroomsService";

export async function getAll(req: Request, res: Response) {
  try {
    const classrooms = await classroomsService.getAll(req.query);
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
    const classroom = await classroomsService.create(req.body as IClassroom);
    res.status(201).send(classroom);
  } catch (error) {
    console.error(error);
    sendError(res, APIErrors.INTERNAL_SERVER_ERROR);
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    const classroom = await classroomsService.updateById(
      req.params.id,
      req.body as IClassroom
    );
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

export async function deleteById(req: Request, res: Response) {
  try {
    const classroom = await classroomsService.deleteById(req.params.id);
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
