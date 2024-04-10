import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Params } from 'express-serve-static-core'
import { Request, Response} from 'express'

type MockResponse<TResult> = Response & {
  state: {
    status?: number,
    json?: TResult | unknown
  }

}

describe('UserController', () => {
  
  const mockUserService: Partial<UserService> = {}
  const userController = new UserController(mockUserService as UserService)

  const makeMockRequest = ({ params, query }: { params?: Params, query?: Params}): Request => {
    const request = {
      params: params || { },
      query: query || { }
    } as unknown

    return request as Request
  }

  function makeMockResponse<TResult>(){
    const response = {
      state: {}
    } as MockResponse<TResult>

    response.status = (status: number) => {
      response.state.status = status
      return response
    }

    response.json = (json: TResult) => {
      response.state.json = json
      return response

    }

    return response
  }

  it('Deve adicionar um novo usuário', () => {

    const mockRequest = makeMockRequest({})
    const mockResponse = makeMockResponse()
    const response = userController.createUser(mockRequest, mockResponse)
    console.log(response)
  })
})