import React from "react"
import {
  Text,
  View,
} from "react-native"
import styles from "./styles"
import { dynamicText } from "/lib/helpers"

export function renderTables(tables, data) {
  return (
    <View style={styles.accordionTable}>
      { tables.map((tableItem, i) => (
        <View key={tableItem.resultsValue + i}>
          <Text style={styles.tableResults}>{tableItem.title}</Text>
          <View>
            { tableItem.rows.map((row, j) => {
              if (j === 0) {
                return (
                  <View key={row.text + j} style={styles.tableRowHeader}>
                    <View style={styles.rowDesc}>
                      <Text style={styles.tableTextHeader}>{row.text}</Text>
                    </View>
                    { row.values.map((value, k) => {
                      const text = dynamicText(value.text, data)
                      return (
                        <View key={text + k} style={styles.rowData}>
                          <Text style={styles.tableTextHeader}>{text}</Text>
                        </View>
                      )
                    }) }
                  </View>
                )
              }
              return (
                <View key={row.text + j} style={styles.tableRow}>
                  <View style={styles.rowDesc}>
                    <Text style={[styles.tableText, styles.rowDescText]}>{row.text}</Text>
                  </View>
                  { row.values.map((value, l) => {
                    const text = dynamicText(value.text, data)
                    return (
                      <View key={text + l} style={styles.rowData}>
                        <Text style={styles.tableText}>{text}</Text>
                      </View>
                    )
                  })}
                </View>
              )
            })
            }
          </View>
        </View>
      ))
      }
    </View>
  )
}
