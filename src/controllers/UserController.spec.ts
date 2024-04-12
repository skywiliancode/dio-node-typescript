import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request } from "express"

describe('UserController', () => {
  
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn()
  }
  const userController = new UserController(mockUserService as UserService)


  it('Deve adicionar um novo usuário', () => {

    const mockRequest = {
      body:{
        name: 'wilian',
        email: 'wilian@gmail.com'
      }
    } as Request
    const mockResponse = makeMockResponse()
    userController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({messege: 'Usuário criado'})
  })
})