import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationsRepository
);
const listSpecificationsController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationsController };
