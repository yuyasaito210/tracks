import React, { Component } from "react"
import {
  ActionConst,
  Actions,
  Scene,
  Reducer,
} from "react-native-router-flux"
import { getSize } from "./lib/helpers/styleSizes"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import Button from "apsl-react-native-button"
import { persistor, store } from "./lib/configureStore"
// import { configureStore } from "./lib/configureStore"
// import { persistStore } from "redux-persist"
import { AppActions } from "/constants"
import App from "./containers/App"
import Login from "./containers/Login"
import ForceLogin from "./containers/ForceLogin"
import OauthLoginWebView from "./containers/OauthLoginWebView"
import HelpWebView from "./containers/HelpWebView"
import Home from "./containers/Home"
import HomeTitle from "./components/Home/HomeTitle"
import BackButton from "./components/Helpers/BackButton"
import Announcement from "./containers/Announcement"
import Announcements from "./containers/Announcements"
import Assignment from "./containers/Assignment"
import Assignments from "./containers/Assignments"
import ComingUp from "./containers/ComingUp"
import Courses from "./containers/Courses"
import PastAssignments from "./containers/PastAssignments"
import SelfAssessments from "./containers/SelfAssessments"
import Assessment from "./containers/Assessment"
import NewAssessment from "./containers/NewAssessment"
import Settings from "./containers/Settings"
import SideDrawer from "./components/Helpers/Menu/SideDrawer"
import ErrorView from "./containers/ErrorScreen"
import LinkedRouter from "./containers/LinkedRouter"
import { hideGlossary, hideTOC, renderAssessmentIntro } from "./actions/assessmentActions"
import { getAssignment } from "./actions/courseActions"

import { createIconSetFromIcoMoon } from "react-native-vector-icons"
import icoMoonConfig from "./lib/icons/BearTracks.json"
import Translations from "./lib/Translations"

import I18n from "react-native-i18n"

// import PushService from "./lib/helpers/PushService"

I18n.fallbacks = true

I18n.translations = Translations
const Icon = createIconSetFromIcoMoon(icoMoonConfig)

import styles from "./styles"

// PushService.configure()
const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params)
  return (state, action) => defaultReducer(state, action)
}

/* let store
 * let persistor */

export default class Beartracks extends Component {
  constructor(props) {
    super(props)

    this.assessmentAttemptBackTitle = this.assessmentAttemptBackTitle.bind(this)
    this.backFromAssessment = this.backFromAssessment.bind(this)
    this.backFromAssessmentAttempt = this.backFromAssessmentAttempt.bind(this)
    this.localstore = store
  }

  componentDidMount() {
    store.dispatch({
      type: AppActions.UPDATE_EXTERNAL,
      ...JSON.parse((this.props || {}).pushData || "{}"),
    })
  }

  assessmentAttemptBackTitle() {
    const { assessment } = this.localstore.getState()

    if (assessment.showGlossary || assessment.showTOC) {
      return "Chapter"
    }

    return "History"
  }

  backFromAssessment() {
    const { course } = this.localstore.getState()
    this.localstore.dispatch(getAssignment(course.selectedAssignment.id, course.selectedAssignment.course_id, true))
  }

  backFromAssessmentAttempt() {
    const { assessment, course } = this.localstore.getState()

    if (assessment.showGlossary) {
      this.localstore.dispatch(hideGlossary())
    } else if (assessment.showTOC) {
      this.localstore.dispatch(hideTOC())
    } else {
      this.localstore.dispatch(renderAssessmentIntro(course.selectedAssignment, true))
    }
  }

  menuButton() {
    return (
      <Button onPress={() => Actions.refresh({ key: "Tabbar", open: true })} style={styles.button}>
        <Icon style={styles.menuIcon} name={"menu"} size={getSize(25, 25, 40, 50)} />
      </Button>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LinkedRouter sceneStyle={styles.mainSceneStyle} createReducer={reducerCreate}>
            <Scene key={"root"} hideNavBar initial>
              <Scene
                key={"App"}
                component={App}
                type={"replace"}
                initial />

              <Scene
                key={"Login"}
                title={I18n.t("BearTracks.login")}
                iconName={"heart"}
                hideNavBar
                component={Login}
                panHandlers={null} />

              <Scene
                key={"OauthLoginWebView"}
                title={"Login"}
                iconName={"heart"}
                hideNavBar
                component={OauthLoginWebView}
                panHandlers={null} />

              <Scene
                key={"ErrorView"}
                title={"Error"}
                iconName={"error"}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                component={ErrorView}
                panHandlers={null}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.pop()}
                         backTitle={"Back"} />)
                } />

              <Scene
                key={"ForceLogin"}
                title={I18n.t("BearTracks.login")}
                iconName={"heart"}
                hideNavBar
                component={ForceLogin}
                panHandlers={null} />

              <Scene
                key={"Courses"}
                title={I18n.t("BearTracks.courses")}
                iconName={"courses"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                component={Courses} />

              <Scene
                key={"Announcements"}
                title={I18n.t("BearTracks.announcements")}
                iconName={"announcements"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Tabbar({ type: ActionConst.RESET })}
                         backTitle={"Home"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={Announcements} />

              <Scene
                key={"Announcement"}
                title={I18n.t("BearTracks.announcement")}
                iconName={"announcement"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Announcements({ type: ActionConst.RESET })}
                         backTitle={"Announcements"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={Announcement} />

              <Scene
                key={"Assignments"}
                title={I18n.t("BearTracks.toDo")}
                iconName={"assignment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Tabbar({ type: ActionConst.RESET })}
                         backTitle={"Home"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={Assignments} />

              <Scene
                key={"Assignment"}
                title={I18n.t("BearTracks.assignment")}
                iconName={"assignment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.pop()}
                         backTitle={this.localstore.getState().course.customBackTitle || I18n.t("BearTracks.assignments")} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={Assignment} />

              <Scene
                key={"ComingUp"}
                title={I18n.t("BearTracks.comingUp")}
                iconName={"assignment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Assignments({ type: ActionConst.RESET })}
                         backTitle={I18n.t("BearTracks.assignments")} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={ComingUp} />

              <Scene
                key={"SelfAssessments"}
                title={I18n.t("BearTracks.self_assessments")}
                iconName={"assessment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Tabbar({ type: ActionConst.RESET })}
                         backTitle={"Home"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={SelfAssessments} />

              <Scene
                key={"AssessmentItem"}
                title={I18n.t("BearTracks.self_assessments")}
                iconName={"assessment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={this.backFromAssessment}
                         backTitle={"Assignment"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={Assessment} />

              <Scene
                key={"NewAssessment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                title={"1.5 Mile Run Test"}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={this.backFromAssessmentAttempt}
                         backTitle={this.assessmentAttemptBackTitle()} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={NewAssessment} />

              <Scene
                key={"PastAssignments"}
                title={I18n.t("BearTracks.pastAssignments")}
                iconName={"assignment"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Assignments({ type: ActionConst.RESET })}
                         backTitle={I18n.t("BearTracks.assignments")} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={PastAssignments} />

              <Scene
                key={"Help"}
                title={I18n.t("BearTracks.help")}
                iconName={"help"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Tabbar({ type: ActionConst.RESET })}
                         backTitle={"Home"} />)
                }
                backButtonTextStyle={styles.navBarBackButton}
                component={HelpWebView} />

              <Scene
                key={"Settings"}
                title={"Settings"}
                iconName={"settings"}
                hideNavBar={false}
                navigationBarStyle={styles.navBarStyle}
                titleStyle={styles.navBarTitle}
                backButtonTextStyle={styles.navBarBackButton}
                renderBackButton={() => (
                  <BackButton
                    back={() => Actions.Tabbar({ type: ActionConst.RESET })}
                         backTitle={"Home"} />)
                }
                component={Settings} />

              <Scene
                key="Tabbar"
                tabs
                component={SideDrawer}>

                <Scene
                  key={"Home"}
                  hideNavBar={false}
                  renderTitle={() => (
                    <HomeTitle />)
                  }
                  iconName={"heart"}
                  navigationBarStyle={styles.navBarStyle}
                  titleStyle={styles.homeNavBarTitle}
                  titleWrapperStyle={styles.titleWrapper}
                  component={Home}
                  renderBackButton={this.menuButton}
                  panHandlers={null} />
              </Scene>
            </Scene>
          </LinkedRouter>
        </PersistGate>
      </Provider>
    )
  }
}
