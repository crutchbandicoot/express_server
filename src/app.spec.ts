import request from "supertest";
import app from "./app";

describe("express app testing", () => {
  it("app is a function", () => {
    expect(typeof app).toBe("function");
  });

  it("tests express app response", async () => {
    const res = await request(app).get("/");
    const reponse = {
      message: "Express server is running like a well oiled machine",
    };
    expect(res.status).toBe(200);
    expect(res.body).toEqual(reponse);
  });
});
