import { Router } from "express";
import { isAuthenticated, isSeller } from "../../middleware/middleware";
import profile from './profile'
import product from './product'
const router = Router()

router.use(isAuthenticated)
router.use(profile)

router.use(isSeller)
router.use(product)

export default router