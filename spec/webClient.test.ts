import { getMaxes } from "../src/webClient";

let oldFetch: (input?: Request | string, init?: RequestInit) => Promise<Response>;

describe("WebClient", () => {
    const fetchStub = jest.fn(() => Promise.resolve(new Response("", {status: 200})));

    beforeAll(() => {
        oldFetch = window.fetch;
    });

    beforeEach(() => {
        fetchStub.mockClear();
        window.fetch = fetchStub;
    });

    afterAll(() => {
        window.fetch = oldFetch;
    });

    describe("getMaxes", () => {
        it("should GET with correct path and headers", () => {
            getMaxes();

            expect(fetchStub).toHaveBeenCalledTimes(1);
            expect(fetchStub).toHaveBeenCalledWith(
                expect.stringContaining("/maxes"),
                expect.objectContaining({
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }),
            );
        });
    });
});
