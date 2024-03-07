import express from 'express';
import { isAuthorized } from "../middlewares/auth.js";
import { employerGetAllAplications, jobSeekerDeleteApplication, jobseekerGetAllAplications, postApplication } from '../controllers/applicationController.js';

const router = express.Router();

router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllAplications);
router.get("/employer/getall", isAuthorized, employerGetAllAplications);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);
router.post("/post", isAuthorized, postApplication);

export default router;