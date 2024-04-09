import { UserService } from "./UserService";

describe('UserService', () => {
  const userService = new UserService()
  it('Deve adicionar o usuário', () => {
    
    const mockConsole = jest.spyOn(global.console, 'log')

    userService.createUser('wilian', 'wilian@gmail.com')
    expect(mockConsole).toHaveBeenCalled()
  })
})