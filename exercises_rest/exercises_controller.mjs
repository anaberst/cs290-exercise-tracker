/**
 * Anastasiya Berst
 */

import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const PORT = process.env.PORT;
const app = express();
const ERROR_NOT_FOUND = { Error: "Not found"};
const INVALID_REQUEST = { Error: "Invalid request"}

app.use(express.json());

app.listen(PORT, async () => {
    await exercises.connect()
    console.log(`Server listening on port ${PORT}...`);
});

/**
 * 
 * @param {object} req 
 * @returns {boolean}
 * Validates properties of request body.
 */
function isValid(req) {

  const body = req.body;
  const format = /^\d\d-\d\d-\d\d$/;
  const validProperties = ['name', 'reps', 'weight', 'unit', 'date'];
  const bodyKeys = Object.keys(body);

  // check for invalid properties
  for (let key of bodyKeys) {
    if (!validProperties.includes(key)) {

        // invalid body
        return false;
    }
}
    // required properties: name, reps, weight, unit, date
    if (body.name && body.reps && body.weight && body.unit && body.date) {

      // name = string, 1+ character
      if (typeof body.name === 'string' && body.name.length > 0) {

        // reps = positive integer
        if (Number.isInteger(body.reps) && body.reps > 0) {

            // weight = positive integer
            if (Number.isInteger(body.weight) && body.weight > 0) {

                // unit = string
                if (typeof body.unit === 'string') {

                    // kgs or lbs
                    if (body.unit === 'lbs' || body.unit === 'kgs') {

                        // date = string, MM-DD-YY format
                        if (typeof body.date === 'string' && format.test(body.date)) {

                            // valid body
                            return true;
                        }  
                    }
                }
            }
        }
    }

}
    // invalid body
    return false;
}


/**
 * Logs a new exercise with the query parameters provided in the body.
 */
app.post('/exercises', asyncHandler(async (req, res) => {

    // body is valid and exercise was successfully logged
    if (isValid(req)) {
        const exercise = await exercises.logExercise(req.body.name, 
                        req.body.reps, 
                        req.body.weight,
                        req.body.unit,
                        req.body.date);
        res.status(201).json(exercise);

    } else {
        res.status(400).json(INVALID_REQUEST);
    }
}));


/**
 * Retrieve an array of all logged exercises.
 */
app.get('/exercises', asyncHandler(async (req, res) => {
    
    const exercise = await exercises.getAllExercises({});
    res.status(200).json(exercise);
}));


/**
 * Retrieve a logged exercise object by its unique ID.
 */
app.get('/exercises/:_id', asyncHandler(async (req, res) => {

    const exercise = await exercises.getExerciseById(req.params._id);

    // no matching IDs found
    if (!exercise) {
        res.status(404).json(ERROR_NOT_FOUND);
    }
    // exercise found
    else {
        res.status(200).json(exercise);
    }
}));


/**
 * Update properties of a previously logged exercise.
 */
app.put('/exercises/:_id', asyncHandler(async (req, res) => {

    const exercise = await exercises.getExerciseById(req.params._id);

    // invalid body
    if (!isValid(req)) {
        res.status(400).json(INVALID_REQUEST);
    }
    // no matching IDs found
    else if (!exercise) {
        res.status(404).json(ERROR_NOT_FOUND);
    }
    // exercise found -> update properties
    else {
        const updatedExercise = await exercises.updateExerciseById(req.params._id, req.body, {});
        res.status(200).json(updatedExercise);
    }
}));


/**
 * Delete a logged exercise by its unique ID.
 */
app.delete('/exercises/:_id', asyncHandler(async (req, res) => {

    const exercise = await exercises.deleteExerciseById(req.params._id);
    
    // no matching IDs found
    if (!exercise){
        res.status(404).json(ERROR_NOT_FOUND);
    }
    // exercise found and deleted
    else {
        res.status(204).send();
    }
}));
