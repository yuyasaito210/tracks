import AssessmentAction from "/constants/actions/assessment"
import AuthAction from "/constants/actions/auth"
import CourseAction from "/constants/actions/course"
import ExternalAction from "/constants/actions/external"
import GlobalAction from "/constants/actions/global"
import IntegrationAction from "/constants/actions/integration"
import UserAction from "/constants/actions/user"

const AppActions = Object.assign(
  {},
  AssessmentAction,
  AuthAction,
  CourseAction,
  ExternalAction,
  GlobalAction,
  IntegrationAction,
  UserAction,
)

export default AppActions
