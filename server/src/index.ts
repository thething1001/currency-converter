import express from "express"
import cors from "cors"

const createHTTPServer = () => {
  const app = express()

  app.use(express.json())
  app.use(cors({ origin: true }))

  app.use("/ping", (req, res) => {
    res.send("Pong!")
  })

  return app
}

export const app = createHTTPServer()
