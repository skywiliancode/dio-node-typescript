import { UserService } from "./UserService";
import { IUser } from "./UserService";
describe('UserService', () => {
  const mockDb: IUser[] = []
  const userService = new UserService(mockDb)
  it('Deve adicionar o usuário', () => {
    
    const mockConsole = jest.spyOn(global.console, 'log')

    userService.createUser('wilian', 'wilian@gmail.com')
    expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
  })
})