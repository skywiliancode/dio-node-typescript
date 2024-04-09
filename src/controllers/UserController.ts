import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController{
  createUser = (request: Request, response: Response) => {
    const user = request.body
    const userService = new UserService()
    
    if(!user.name){
      return response.status(400).json({messege:"Bad request! User invalid."})
    }
    
    userService.createUser(user.name, user.email)
    
    return response.status(201).json({
      messege: 'Usuário criado'
    })
  }
  
  getAllUsers = (request: Request, response: Response) => {
    const userService = new UserService()
    userService.getAllUsers()
  }

}