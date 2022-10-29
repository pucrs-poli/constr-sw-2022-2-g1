import Joi from "joi";

export default class BuildingsValidations {
  public static GetById = Joi.string().hex().length(24).required();
  public static CreateOrUpdate = Joi.object({
    name: Joi.string().required(),
    number: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    address: Joi.object({
      street: Joi.string().required(),
      number: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
      complement: Joi.string(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
    }).required(),
    classrooms: Joi.array().items(Joi.string()),
  });
  public static SearchOrPatch = Joi.object({
    name: Joi.string(),
    number: Joi.alternatives().try(Joi.string(), Joi.number()),
    address: Joi.object({
      street: Joi.string(),
      number: Joi.alternatives().try(Joi.number(), Joi.string()),
      complement: Joi.string(),
      neighborhood: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zipCode: Joi.string(),
    }),
  });
}
