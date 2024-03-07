import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobSchema.js";

export const getAllJobs = catchAsyncError(async(req, res, next)=>{
    const jobs = await Job.find({expired: false});
    res.status(200).json({
        success: true,
        jobs,
    });
});


export const postJob = catchAsyncError(async(req, res, next) => {
    const {role} = req.user;

    if(role === "Job Seeker"){
        return next(new ErrorHandler("You are not authorized to perform this action",400));
    }
    const {title, description, category, country, city, location, fixedSalary, salaryFrom, salaryTo,} = req.body;

    if(!title || !description || !category || !country || !city || !location){
        return next(new ErrorHandler("Please Fill all the details",400));
    }
    
    if(!salaryFrom || !salaryTo && !fixedSalary){
        return next(new ErrorHandler("Please provide either fixed salary or ranged salary",400));
    }

    if( salaryFrom && salaryTo && fixedSalary){
        return next(new ErrorHandler("You Can't enter fixed and ranged salary together",400));
    }

    const postedBy = req.user._id;
    const job = await Job.create({
        title,
        description,
        category,
        country,
        city,
        location,
        fixedSalary,
        salaryFrom,
        salaryTo,
        postedBy
        
    })
    res.status(201).json({
        success: true,
        message: "Job posted successfully",
        job
    });

});


export const getmyJobs = catchAsyncError(async(req, res, next) =>{
    const { role } = req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("You are not authorized to perform this action",400));
    }

    const myjobs = await Job.find({postedBy: req.user._id});
    res.status(200).json({
        success: true,
        myjobs,
    });
})

export const updateJob = catchAsyncError(async(req, res, next) =>{
        const { role } = req.user;
        if(role === "Job Seeker"){
            return next(new ErrorHandler("You are not authorized to perform this action",400));
        }

        const {id} = req.params;
        let job = await Job.findById(id);
        if(!job){
            return next(new ErrorHandler("Oops, Job not found",404));
        }
        job = await Job.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            job
        });
});

export const deleteJob = catchAsyncError(async(req, res, next) =>{
    const { role } = req.user;
    if(role === "Job Seeker"){
        return next(new ErrorHandler("You are not authorized to perform this action",400));
    }
    const {id} = req.params;
    let job = await Job.findById(id);
    if(!job){
        return next(new ErrorHandler("Oops, Job not found",404));
    }
    job = await Job.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: "Job deleted successfully",
        job
    });


});