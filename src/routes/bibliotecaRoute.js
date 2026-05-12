import express from 'express';
import * as controller from '../controllers/bibliotecaController.js';
import { authPublic } from '../utils/apiKey.js';

const router = express.Router();

router.get('/', authPublic, controller.buscarTodos);
router.get('/:id', authPublic, controller.buscarPorId);

export default router;