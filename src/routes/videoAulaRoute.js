import express from 'express';
import * as controller from '../controllers/videoAulaController.js'
import { authAdmin, authPublic } from '../utils/apiKey.js';

const router = express.Router();

router.post('/', authAdmin, controller.criar);
router.get('/', authPublic, controller.buscarTodos);
router.get('/:id', authPublic, controller.buscarPorId);
router.put('/:id', authAdmin, controller.atualizar);
router.delete('/:id', authAdmin, controller.deletar);

export default router;
