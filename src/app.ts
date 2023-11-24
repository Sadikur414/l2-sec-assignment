import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

//application route
  app.use('/api/users', UserRoutes )
  

app.get('/', (req: Request, res: Response) => {
  const a = 'Hellow world'

  res.send(a)
})

export default app
