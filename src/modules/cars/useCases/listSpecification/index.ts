import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export default (): ListSpecificationController => {
    const specificationsRepository = new SpecificationsRepository();
    const listSpecificationUseCase = new ListSpecificationsUseCase(
        specificationsRepository
    );
    const listSpecificationsController = new ListSpecificationController(
        listSpecificationUseCase
    );

    return listSpecificationsController;
};
