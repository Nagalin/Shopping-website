import { Router } from "express";
import { isAuthenticated, isSeller } from "../../middleware/middleware";
import profile from './profile'
import product from './product'
import buyer from './buyer'
const router = Router()


router.use(isAuthenticated)
router.use(profile)
router.use(product)
router.use(buyer)

router.use(isSeller)
router.get('/isSeller',(req,res)=>{
    res.sendStatus(200)
})


export default router