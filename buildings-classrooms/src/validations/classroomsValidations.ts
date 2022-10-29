import Joi from "joi";

export default class ClassroomsValidations {
  public static createOrUpdateClassroom = Joi.object({
    number: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    capacity: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    floor: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    resource: Joi.string().required(),
    building: Joi.string().required(),
  });
  public static SearchOrPatchClassroom = Joi.object({
    number: Joi.alternatives().try(Joi.string(), Joi.number()),
    capacity: Joi.alternatives().try(Joi.string(), Joi.number()),
    floor: Joi.alternatives().try(Joi.string(), Joi.number()),
    resource: Joi.string(),
    building: Joi.string(),
  });
}
