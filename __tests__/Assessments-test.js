import "react-native"
import AssessmentAttempt from "assessment-js"
import React from "react"
import mockStore from "redux-mock-store"
import renderer from "react-test-renderer"
import { continueAttempt, renderAssessmentIntro } from "../src/actions/assessmentActions"
import { AppActions } from "../src/constants"
import assessmentReducer, { initialState } from "../src/reducers/assessment"
import Assessment from "../src/components/Assessment"
import NewAssessment from "../src/components/NewAssessment"

describe("should handle", () => {
  const store = mockStore({})

  beforeEach(() => {
    store.clearActions()
  })

  const assessmentIntroResponse = {
    introduction: {
      introPage: {
        title: "Family History Assessment",
      },
      adminHistoryPage: {
        title: "Your History",
        footer: "",
        columns: [
          {
            fieldName: "usersName",
            headerName: "Student",
          },
          {
            fieldName: "date_completed",
            headerName: "Date",
          },
          {
            fieldName: "attemptNumber",
            headerName: "Attempt",
          },
        ],
        displayText: "You will be able to view any completed assessments by clicking on the entry you would like to view.",
      },
      studentHistoryPage: {
        title: "Your History",
        footer: "",
        columns: [
          {
            fieldName: "date_completed",
            headerName: "Date",
          },
        ],
        displayText: "You will be able to view any completed assessments by clicking on the entry you would like to view.",
      },
      includeInProgressBar: false,
      mobileStudentHistoryPage: {
        title: "Your History",
        footer: "You will be able to view any completed assessments by clicking on the entry you would like to view.",
        columns: [
          {
            fieldName: "date_completed",
            headerName: "Date",
          },
        ],
        displayText: "",
      },
    },
    assessment_id: 28,
    attempts: [{
      attempt_url: "https://beartracks-staging.perceivant.com/api/v1/assessment_attempts/139",
      completed: true,
      historyColumns: {
        Date: "08/14/2017  7:16PM",
      },
      id: 139,
      ownAttempt: true,
      sectionId: -1,
      statusDate: "2017-08-14T19:16:51.806Z",
    }],
    widgets: [],
    create_attempt_url: "https://beartracks-staging.perceivant.com/api/v1/assessments/28/assessment_attempts",
  }

  const assessment = {
    assignment_id: 1,
    course_id: 6,
    url: "https://beartracks-staging.perceivant.com/api/v1/assessments/family_history_assessment",
  }

  const incompleteAttempt = {
    id: 2560,
    sections: [
      {
        id: 1,
        pages: [
          {
            id: 1,
            type: "featuresPage",
            content: {
              caption: "Before You Begin",
              sections: [
                {
                  id: 2,
                  caption: "A wall",
                  iconURL: "https://s3.amazonaws.com/perceivant-lti-images/icon/wall.png",
                },
                {
                  id: 3,
                  caption: "A measuring tape",
                  iconURL: "https://s3.amazonaws.com/perceivant-lti-images/icon/measure.png",
                },
              ],
              heroImage: "https://s3.amazonaws.com/perceivant-lti-images/IntroImage_AnkleFlexicon.jpg",
              footerText: "",
              displayText: "<b>What does this mean for you?</b><br/>Words Needed",
              variablesTitle: "For the Ankle Flexion Assessment you will need:",
            },
          },
          {
            id: 2,
            type: "stepsPage",
            content: {
              steps: [
                {
                  stepText: "Sit on the floor with legs extended and the knees straight.",
                },
                {
                  stepText: "The feet should be flat against a wall and the arms by the side of the body with palms down.",
                },
                {
                  stepText: "Without bending the knees or moving the heels away from wall, flex the foot by pulling the toes toward body.",
                },
                {
                  stepText: "Enter your result on the next page.",
                },
                {
                  stepText: "Repeat the assessment using the other foot.",
                },
              ],
              video: "https://www.youtube.com/watch?v=sEOnZbAVSgY",
              caption: "Let's Get Started",
              displayText: "Watch the video and carefully read the following instructions prior to beginning the assessment.",
            },
          },
          {
            id: 3,
            type: "question",
            questions: [
              {
                id: 1,
                answers: [
                  {
                    value: 0,
                    displayText: "Left Foot",
                  },
                  {
                    value: 1,
                    displayText: "Right Foot",
                  },
                ],
                questionTag: "foot",
                questionText: "Foot:",
                questionType: "multipleChoice",
                questionImage: "",
              },
              {
                id: 2,
                answers: [
                  {
                    value: 0,
                    displayText: "I was unable to get to 90 degrees with knee straight.",
                  },
                  {
                    value: 1,
                    displayText: "Under 2 inches",
                  },
                  {
                    value: 2,
                    displayText: "2 inches or more",
                  },
                ],
                questionTag: "footFlex",
                questionText: "How far did the ball of your foot move from the wall?",
                questionType: "multipleChoice",
                questionImage: "",
              },
            ],
          },
          {
            id: 4,
            type: "feedback",
            content: {
              caption: "Results",
              infoText: "",
              infoTitle: "",
              showScore: true,
              scoreUnits: "",
              showStatus: false,
              displayText: "Your ankle flexion distance:",
            },
            accordions: [
              {
                type: "paragraph",
                title: "What does this mean for you?",
                displayText: "Words needed",
              },
              {
                type: "table",
                title: "How do you compare to others?",
                resultsTable: [
                  {
                    rows: [
                      {
                        text: "Fitness Category",
                        values: [
                          {
                            text: "Flex Distance",
                          },
                        ],
                      },
                      {
                        text: "Good",
                        values: [
                          {
                            text: "⪰ 2 inches",
                            maxValue: 2,
                            minValue: 2,
                          },
                        ],
                        resultsKey: "footFlex",
                      },
                      {
                        text: "Fair",
                        values: [
                          {
                            text: "< 2 inches",
                            maxValue: 1,
                            minValue: 1,
                          },
                        ],
                        resultsKey: "footFlex",
                      },
                      {
                        text: "Poor",
                        values: [
                          {
                            text: "Could not get to 90°",
                            maxValue: 0,
                            minValue: 0,
                          },
                        ],
                        resultsKey: "footFlex",
                      },
                    ],
                    title: "Ankle Flexion",
                    resultsKey: "type",
                    resultsValue: "AnkleFlexionAssessmentAttempt",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "References.",
                displayText: "Copyright 2014. BYU Used with permission.",
              },
              {
                type: "userInputs",
                title: "What you entered.",
              },
            ],
          },
        ],
        title: "Ankle Flexion Assessment",
        includeInProgressBar: false,
      },
    ],
    responses: {},
    user_name: "Staging, Chris",
    attempt_id: 2560,
    feedback_url: "https://lti-staging.mybearface.com/ankle_flexion_assessment_attempts/2560/feedback",
    questionTags: {},
    visitedPages: [
      1,
      2,
    ],
    pageDurations: {
      1: 1518,
      2: 4309,
    },
    assessment_url: "https://lti-staging.mybearface.com/ankle_flexion_assessment_attempts/2560",
    assessment_type: "AnkleFlexionAssessment",
    lastVisitedPage: 2,
    statusParameters: [
      "type",
      "footFlex",
    ],
    completed_at: null,
  }

  describe("redux functionality", () => {
    it("renders assessment intros successfully", async () => {
      const flux = require.requireActual("react-native-router-flux")
      flux.Actions.AssessmentItem = jest.fn()
      flux.Actions.ErrorView = jest.fn()
      fetch.mockResponseSuccess(JSON.stringify(assessmentIntroResponse))
      await store.dispatch(renderAssessmentIntro(assessment))
      expect(store.getActions()).toMatchSnapshot()
    })

    it("sets assessments and assignments correctly", () => {
      expect(assessmentReducer(initialState, { type: AppActions.ASSESSMENT_INTRO, assessmentIntro: assessmentIntroResponse, assessmentInfo: assessment })).toMatchSnapshot()
    })

    it("gets existing attempts successfully", async () => {
      const flux = require.requireActual("react-native-router-flux")
      flux.Actions.AssessmentItem = jest.fn()
      flux.Actions.ErrorView = jest.fn()
      flux.Actions.NewAssessment = jest.fn()
      fetch.mockResponseSuccess(JSON.stringify(incompleteAttempt))
      await store.dispatch(continueAttempt("http://fake_url.com", 99, "Ankle Flexion Assessment"))
      expect(store.getActions()).toMatchSnapshot()
    })

    it("sets up an existing attempt correctly", () => {
      expect(assessmentReducer(initialState, { type: AppActions.NEW_ASSESSMENT_ATTEMPT, newAssessmentAttempt: incompleteAttempt })).toMatchSnapshot()
    })
  })

  describe("assessment component", () => {
    const assessmentProps = {
      answersList: {},
      areAnswersSubmitting: false,
      assessment: new AssessmentAttempt(incompleteAttempt),
      assessmentResults: {},
      assignmentId: 978, // from the course reducer
      attemptId: 2560,
      courseId: 6,
      dynamicData: {},
      isAllowedScroll: true, // from the global reducer
      isNextPageAllowed: true,
      isResultsPageAllowed: false,
      isWBA: false,
      isWaitingOnDynamicData: false,
      priorityData: initialState.priorityData,
      standardResponses: {},
      title: "Ankle Flexion Assessment",
      actions: {
        toggleNavButtons: jest.fn(),
        setAssessmentPagesCount: jest.fn(),
        getDynamicData: jest.fn(),
        getCalculatedResults: jest.fn(),
        setCurrentPage: jest.fn(),
        togglePageScroll: jest.fn(),
        sendResponce: jest.fn(),
      },
    }

    it("renders the assessment intro page as expected", () => {
      const originalDate = Date
      global.Date = class extends Date {
        getTime() {
          return 1514782800000
        }
      }
      const component = renderer.create(<Assessment assessmentIntro={assessmentIntroResponse} courseId={"6"} startNewAssessment={jest.fn()} />)

      expect(component.toJSON()).toMatchSnapshot()

      global.Date = originalDate
    })

    it("renders the pages of an assessment as expected", () => {
      const originalDate = Date
      global.Date = class extends Date {
        getTime() {
          return 1514782800000
        }
      }
      let component = renderer.create(<NewAssessment {...assessmentProps} />)

      expect(component.toJSON()).toMatchSnapshot()

      assessmentProps.currentPage = 2
      component = renderer.create(<NewAssessment {...assessmentProps} />)

      expect(component.toJSON()).toMatchSnapshot()

      assessmentProps.currentPage = 3
      component = renderer.create(<NewAssessment {...assessmentProps} />)

      expect(component.toJSON()).toMatchSnapshot()
      global.Date = originalDate
    })
  })
})
