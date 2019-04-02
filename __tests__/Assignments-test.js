import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import mockStore from "redux-mock-store"
import { selectAssignment } from "../src/actions/courseActions"
import AssignmentsView from "../src/components/Assignments"

describe("should handle", () => {
  const store = mockStore({})

  beforeEach(() => {
    store.clearActions()
  })

  const assignments = [
    {
      id: 1,
      course_id: 1,
      name: "Sample Assignment 1",
      description: "",
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
    },
    {
      id: 2,
      course_id: 1,
      name: "Sample Assignment 2",
      description: "<p>This is a description</p>",
      points_possible: 5,
      available_on_mobile: false,
      position: 2,
      url: "https://canvas-test.perceivant.com/courses/1/assignments/2",
      grade: "0/5",
      late: false,
      missing: false,
      past_due: false,
      status: "",
      submitted: false,
      due_date: "2031-07-20T19:59:00Z",
      to_do: true,
    },
    {
      id: 3,
      course_id: 1,
      name: "Late Assignment",
      description: "<p>This assignment is late</p>",
      points_possible: 5,
      available_on_mobile: true,
      position: 3,
      url: "https://beartracks-test.perceivant.com/api/v1/assessments/late_assessment",
      grade: "1/5",
      late: true,
      missing: false,
      past_due: false,
      status: "Late",
      submitted: true,
      due_date: "2000-07-20T19:59:00Z",
      to_do: false,
    },
    {
      id: 4,
      course_id: 1,
      name: "Past Due Assignment",
      description: "<p>This is past due</p>",
      points_possible: 10,
      available_on_mobile: false,
      position: 4,
      url: "https://canvas-test.perceivant.com/courses/1/assignments/4",
      grade: "0/10",
      late: false,
      missing: false,
      past_due: true,
      status: "",
      submitted: false,
      due_date: "2000-07-20T19:59:00Z",
      to_do: true,
    },
  ]

  describe("index component", () => {
    it("renders as expected when there are assignments", () => {
      const component = renderer.create(
        <AssignmentsView
          actions={{}}
          assignments={assignments}
          plannerItems={[]} />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()

      // open Past Assignments
      component.getInstance().setState({ pastAssignmentsButton: true })
      tree = component.toJSON()
      expect(tree).toMatchSnapshot()

      // close Past Assignments
      component.getInstance().setState({ pastAssignmentsButton: false })
      tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("dispatches the expected actions when clicking on an assignment", () => {
      const flux = require.requireActual("react-native-router-flux")
      flux.Actions.Assignment = jest.fn()

      const component = renderer.create(
        <AssignmentsView
          actions={{ selectAssignment }}
          assignments={assignments}
          plannerItems={[]} />)

      // Click on first assignment in array
      expect(component.getInstance().onItem(assignments[0])).toMatchSnapshot()
    })
  })
})
