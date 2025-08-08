/**
 * Anastasiya Berst
 */

import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISE_DB_NAME = 'exercise_db';
const EXERCISE_CLASS = 'Exercise';

let connection = undefined;

/**
 * This function connects to the MongoDB server and to the database
 *  'exercise_db' in that server.
 */
async function connect(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: EXERCISE_DB_NAME});
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model(EXERCISE_CLASS, exerciseSchema);

/**
 * Logs an exercise.
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save.
 */
const logExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Exercise
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    // Call save to persist this object as a document in MongoDB
    return exercise.save();
}

/**
 * Gets an array of all logged exercises.
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to a JSON array of all logged exercises.
 */
const getAllExercises = async () => {
    const query = Exercise.find();
    return query.exec();
}

/**
 * Gets a JSON object with all the properties for one user specified by ID.
 * @param {Number} id
 * @returns A promise. Resolves to a JSON object of all properties for one logged exercise.
 */
const getExerciseById = async (id) => {
    const query = Exercise.findById(id);
    return query.exec();
}

/**
 * Updates name, reps, weight, unit, and/or date for one exercise specified by ID.
 * @param {Number} id
 * optional @param {String} name
 * optional @param {Number} reps
 * optional @param {Number} weight
 * optional @param {String} unit
 * optional @param {String} date
 * optional @param {String} options
 * @returns A promise. Resolves to a JSON object with all properties for updated exercise.
 */
const updateExerciseById = async (id, update, options) => {
    options.returnDocument='after';
    const query = Exercise.findByIdAndUpdate(id, update, options);
    return query.exec();
}

/**
 * Deletes exercise with specified ID.
 * @param {Number} id
 * @returns A promise. Resolves to a JSON object with all properties for deleted exercise.
 */
const deleteExerciseById = async (id) => {
    const query = Exercise.findByIdAndDelete(id);
    return query.exec();
}

export { connect, logExercise, getAllExercises, getExerciseById, updateExerciseById, deleteExerciseById  };