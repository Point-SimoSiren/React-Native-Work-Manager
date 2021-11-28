import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import Works from './Works'
import Employees from './Employees'

const App = () => {

const [show, setShow] = useState<string>('employees')
const [selectedEmp, setSelectedEmp] = useState<object>({})

  if (show === 'employees') {
    return (
      <Employees setSelectedEmp={setSelectedEmp} setShow={setShow} />
      )
  }

  else if (show === 'works') {
    return (
      <Works selectedEmp={selectedEmp} setShow={setShow} />
      )
  }
}

export default App