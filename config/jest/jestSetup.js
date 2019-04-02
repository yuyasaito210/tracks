/* eslint-disable import/no-extraneous-dependencies */

import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"
import MockAsyncStorage from "mock-async-storage"

const mock = () => {
  const mockImpl = new MockAsyncStorage()
  jest.mock("AsyncStorage", () => mockImpl)
}

mock()

jest.mock("bugsnag-react-native")

Enzyme.configure({ adapter: new Adapter() })
