import Joi from "joi";

export default class BuildingsValidations {
  public static createOrUpdateBuilding = Joi.object({
    name: Joi.string().required(),
    address: Joi.object({
      street: Joi.string().required(),
      number: Joi.number().required(),
      complement: Joi.string(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
    }).required(),
    classrooms: Joi.array().items(Joi.string()),
  });
  public static SearchOrPatchBuilding = Joi.object({
    name: Joi.string(),
    address: Joi.object({
      street: Joi.string(),
      number: Joi.number(),
      complement: Joi.string(),
      neighborhood: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zipCode: Joi.string(),
    }),
  });
}
