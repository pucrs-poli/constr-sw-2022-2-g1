import Joi from "joi";

export default class ClassroomsValidations {
  public static createOrUpdateClassroom = Joi.object({
    number: Joi.number().required(),
    capacity: Joi.number().required(),
    floor: Joi.number().required(),
    resource: Joi.string().required(),
    building: Joi.string().required(),
  });
  public static SearchOrPatchClassroom = Joi.object({
    number: Joi.number(),
    capacity: Joi.number(),
    floor: Joi.number(),
    resource: Joi.string(),
  });
}
