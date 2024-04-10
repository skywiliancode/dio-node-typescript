import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController{

  userService: UserService

  constructor(userService = new UserService){
    this.userService = userService

  }

  createUser = (request: Request, response: Response) => {
    const user = request.body
    
    if(!user.name){
      return response.status(400).json({messege:"Bad request! User invalid."})
    }
    
    this.userService.createUser(user.name, user.email)
    
    return response.status(201).json({
      messege: 'Usuário criado'
    })
  }
  
  getAllUsers = (request: Request, response: Response) => {
    this.userService.getAllUsers()
  }

}