import mongoose from 'mongoose';


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a job title!"],
        minLength: [3, "Title must contain at least 3 characters!"],
        maxLength: [50, "Title cannot exceed 50 characters!"]
    },
    description:{
        type: String,
        required: [true, "Please provide a job description!"],
        minLength: [3, "Description must contain at least 3 characters!"],
        maxLength: [350, "Description cannot exceed 350 characters!"]
    },
    category:{
        type: String,
        required: [true, "Please provide a job category!"],
    },
    country:{
        type: String,
        required: [true, "Please provide a country!"],
    },
    city:{
        type: String,
        required: [true, "Please provide a city!"],
    },
    location:{
        type: String,
        required: [true, "Please provide a location!"],
        minLength: [50, "Location must contain at least 50 characters!"],
    },
    fixedSalary:{
        type: Number,
        minLength: [4, "Fixed Salary must contain at least 5 characters!"],
        maxLength: [9, "Fixed Salary cannot exceed 10 characters!"]   
    },
    salaryFrom:{
        type: Number,
        minLength: [4, "Salary From must contain at least 5 characters!"],
        maxLength: [9, "Salary From cannot exceed 10 characters!"]
    },
    salaryTo:{
        type: Number,
        minLength: [4, "Salary To must contain at least 5 characters!"],
        maxLength: [9, "Salary To cannot exceed 10 characters!"]
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
});


export const Job = mongoose.model("Job",jobSchema);