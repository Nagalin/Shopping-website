import { Router } from "express";
import { isAuthenticated } from "../../middleware/middleware";
import profile from './profile'
import product from './product'
const router = Router()

router.use(isAuthenticated)
router.use(profile)
router.use(product)

export default router