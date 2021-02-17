import React from 'react'
import { render, Document, Text } from 'redocx'

export default class MyComponent extends React.Component {
  render() {
    return (
      <Document>
        <Text>Hello World</Text>
      </Document>
    )
  }
}

// render(<MyComponent />, `${__dirname}/example.docx`)