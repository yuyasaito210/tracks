import { Client, Configuration } from "bugsnag-react-native"

const config = new Configuration("81cc2d44fd650be7a2864bcc399372e7")
config.codeBundleId = "2.1.0"
const client = new Client(config)
export default client
