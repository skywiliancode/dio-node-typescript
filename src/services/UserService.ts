const db = [
  {
    name: 'wilian',
    email: 'wilian@gmail.com'
  }
]

export class UserService{
  createUser = (name: string, email: string) =>{
    const user = {
      name,
      email
    }

    db.push(user)
    console.log(db)
  }

  getAllUsers = () =>{
    return db
  }
}