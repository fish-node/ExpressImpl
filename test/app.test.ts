import request from "supertest";

import app from "../src/app";

describe("测试express服务器", () => {
    it("Get /", async () => {
        // 获得响应对象
        const result = await request(app).get("/");
        console.log(result);

        // 判断响应的状态码以及报文主题
        expect(result.status).toEqual(200);
        expect(result.text).toEqual("hello world");
    });
});
