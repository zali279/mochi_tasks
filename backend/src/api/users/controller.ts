import { Request, Response, NextFunction } from "express";
import User from "./model";
import { createError } from "../../middlewares/error-handler";

export const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
        where: { email }
    });

    if( user && password == user.password){
         let payload = {
            name: user.name,
            email: user.email,
        }
        res.status(200).json({ success: true, data: payload });
    }else{
      return next(createError("Invalid email or password", 400));          
    }
    
  } catch (error) {
    next(error);
  }
};

export const Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body)
        const { email, password } = req.body
    
        let existingUser = await User.findOne({ where: { email } })
    
        if (existingUser) {
          return next(createError("A user with that email has already been registered!", 400));
        } else {
          delete req.body.confirmPassword
    
          const user = await User.create(req.body)

          res.status(201).json({ success: true, data: user });
        }
      }catch (error) {
        next(error);
      }
}

