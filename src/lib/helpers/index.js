import moment from "moment"
import React from "react"
import HTMLView from "/lib/helpers/HTMLView"

import { RegularStyles, HeaderStyles, HelpText, StepsStyles } from "./styles"

export function htmlView(html, type) {
  if (html === undefined || html === null) {
    return ""
  }
  let styles = RegularStyles

  switch (type) {
    case "header":
      styles = HeaderStyles
      break
    case "steps":
      styles = StepsStyles
      break
    case "helpText":
      styles = HelpText
      break
    default:
      styles = RegularStyles
      break
  }
  return (
    <HTMLView
      value={`<p>${html}</p>`}
      stylesheet={styles}
    />
  )
}

export function striphtml(text) {
  return text.replace("<br/>", " ").replace(/<.+?>/g, "")
}

export function dynamicText(text, data) {
  if (data !== undefined && data !== null) {
    return text.replace(/\{\{(.*?)\}\}/g, (match, key, offset, original) => (data[key] !== undefined ? data[key] : original))
  }
  return text
}

export function sortUpcomingItems(items) {
  return items.sort((a, b) => {
    if ((!a.submitted && !a.plannable_type) && b.submitted) {
      return -1
    }
    if (a.submitted && (!b.submitted && !b.plannable_type)) {
      return 1
    }

    if (a.past_due && (!b.past_due && !b.plannable_type)) {
      return -1
    }
    if ((!a.past_due && !a.plannable_type) && b.past_due) {
      return 1
    }

    if (a.due_date && !b.due_date) {
      return -1
    }
    if (b.due_date && !a.due_date) {
      return 1
    }
    if (a.due_date && b.due_date) {
      const aDate = moment(a.due_date)
      const bDate = moment(b.due_date)
      if (aDate.isBefore(bDate)) {
        return -1
      }
      if (bDate.isBefore(aDate)) {
        return 1
      }
    }

    return Math.sign(a.position - b.position)
  })
}

export function sortPastItems(items) {
  return items.sort((a, b) => {
    if (a.due_date && !b.due_date) {
      return -1
    }
    if (b.due_date && !a.due_date) {
      return 1
    }
    if (a.due_date && b.due_date) {
      const aDate = moment(a.due_date)
      const bDate = moment(b.due_date)
      if (aDate.isBefore(bDate)) {
        return -1
      }
      if (bDate.isBefore(aDate)) {
        return 1
      }
    }

    return Math.sign(a.position - b.position)
  })
}
