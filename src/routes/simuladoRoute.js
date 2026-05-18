import express from 'express';
import * as controller from '../controllers/simuladoController.js';
import { authAdmin, authPublic } from '../utils/apiKey.js';

const router = express.Router();

router.post('/', authAdmin, controller.criar);
router.get('/', authPublic, controller.buscarTodos);
router.get('/:id', authPublic, controller.buscarPorId);
router.put('/:id', authPublic, controller.atualizar);
router.delete('/:id', authAdmin, controller.deletar);

export default router;
