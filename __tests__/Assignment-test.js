import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import mockStore from "redux-mock-store"
import { selectAssignment } from "../src/actions/courseActions"
import AssignmentView from "../src/components/Assignment"

describe("should handle", () => {
  const store = mockStore({})

  beforeEach(() => {
    store.clearActions()
  })

  const assignment = {
    id: 1,
    course_id: 1,
    name: "Sample Assignment 1",
    description: "",
    due_date: "2031-07-20T19:59:00Z",
    points_possible: 5,
    available_on_mobile: true,
    position: 1,
    url: "https://beartracks-test.perceivant.com/api/v1/assessments/sample_assessment_1",
    grade: "0/5",
    late: false,
    missing: false,
    past_due: false,
    status: "",
    submitted: false,
    to_do: true,
  }

  describe("index component", () => {
    const renderAssessmentIntro = jest.fn()
    it("renders as expected", () => {
      const component = renderer.create(
        <AssignmentView
          assignment={assignment}
          renderAssessmentIntro={renderAssessmentIntro} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()

      component.getInstance().goToAssignment(assignment)
      expect(renderAssessmentIntro).toHaveBeenCalledWith(assignment)
      expect(renderAssessmentIntro).toHaveBeenCalledTimes(1)
    })
  })
})
