import { personController } from "../controllers/person.controller.js";
import {Router} from 'express'

const personRouter= Router()

personRouter.route('/persons')
            .post(personController.createPerson)
            .get(personController.getAllPersons)
personRouter.route('/person/:id')
            .get(personController.getOnePerson)
            .delete(personController.deletePerson)
            .put(personController.updatePerson)


export default personRouter;