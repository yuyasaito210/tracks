// Mocking the global.fetch included in React Native
global.fetch = jest.fn()

// Helper to mock a success response (only once)
fetch.mockResponseSuccess = (body, status = 200) => {
  fetch.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(JSON.parse(body)), status }))
}

// Helper to mock a failure response (only once)
fetch.mockResponseFailure = (error) => {
  fetch.mockImplementationOnce(() => Promise.reject(error))
}
