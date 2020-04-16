import axios from "axios";
import httpClient from "@/services/common/http-client/http-client";

// Mock module with Jest mock functions
jest.mock("@/services/common/http-client/http-client");

describe("In httpClient", () => {
  const apiBaseUrl = "https://api.edamam.com/api/nutrition-details?app_id=b1acf3f5&app_key=9998682e2ea2dc5e71d4910f0b98860a";


  it("httpClient to be defined", () => {
    expect(httpClient).toBeDefined();
  });

  it("axios.create sets the baseUrl", () => {
    const expected = axios.create({
      apiBaseUrl
    });
    expect(httpClient.baseURL).toEqual(expected.baseURL);
  });
  it("axios.create sets the baseUrl", () => {
    const expected = axios.create({
      apiBaseUrl
    });
    expect(httpClient.baseURL).toEqual(expected.baseURL);
  });

});
