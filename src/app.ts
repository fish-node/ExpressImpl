import {Request, Response} from "express";

import express from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});

export default app;
