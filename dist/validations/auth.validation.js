"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneUserValidation = exports.signinValidation = exports.signupValidation = void 0;
const signupValidation = async (req, res, next) => {
    try {
        const { name, email, pass, imageUrl } = req.body;
        if (!name || name.length < 3) {
            res.status(400).json({ message: 'name is required with minimum length of 3 characters' });
        }
        else if (!email || !email.includes('@') || !email.includes('.')) {
            res.status(400).json({ message: 'please enter a valid email' });
        }
        else if (!pass || pass.length < 8) {
            res.status(400).json({ message: 'password length must be at least 8 characters' });
        }
        else if (imageUrl && !isNaN(imageUrl)) {
            res.status(400).json({ message: 'please enter a valid image for you' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.signupValidation = signupValidation;
const signinValidation = async (req, res, next) => {
    try {
        const { email, pass } = req.body;
        if (!email || !email.includes('@') || !email.includes('.')) {
            res.status(400).json({ message: 'please enter a valid email' });
        }
        else if (!pass || pass.length < 8) {
            res.status(400).json({ message: 'password length must be at least 8 characters' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.signinValidation = signinValidation;
const findOneUserValidation = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(+id) || +id <= 0) {
            res.status(400).json({ message: 'please enter a valid id' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.findOneUserValidation = findOneUserValidation;
