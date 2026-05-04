import status from "../pages/api/v1/status/index.js";

jest.mock("../infra/database.js", () => ({
  __esModule: true,
  default: { query: jest.fn().mockResolvedValue({ rows: [] }) },
}));

describe("status handler", () => {
  it("deve retornar status 200", async () => {
    const request = {};

    const statusMock = jest.fn(() => ({
      json: jest.fn(),
    }));

    const response = {
      status: statusMock,
    };

    await status(request, response);

    expect(statusMock).toHaveBeenCalledWith(200);
  });
});
