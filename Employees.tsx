import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicatorBase } from 'react-native';

interface Props {
  setSelectedEmp: React.Dispatch<object>,
  setShow: React.Dispatch<React.SetStateAction<string>>
  }

  interface IEmployee {
    idEmployee: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    emailAddress?: string;
    createdAt?: string;
    lastModifiedAt?: string;
    deletedAt?: string;
    active: boolean;
    imageLink?: string;
  }

const Employees: React.FC<Props> = ({setSelectedEmp, setShow}) => {

const [selected, setSelected] = useState({})
const [employees, setEmployees] = useState<any>([])

useEffect(() => {
  fetch('https://timesheetrest/api/employees')
  .then(res => res.json())
  .then((data: IEmployee[]) => {
    setEmployees(data)
})
}, [])

const select = (e: object) => {
  setSelectedEmp(e)
  setShow('works')
}

  return (
    <View style={styles.container}>
      <Button title={"Lisää uusi"} onPress={() => setShow('addForm')} />
      <Text style={styles.header}>Työntekijät</Text>
      {employees.map(e => ( <Text onPress={() => select(e)} style={styles.p} key={e.id}>{e.Name}</Text>))}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  header: {
    marginTop: 3,
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    marginTop: 5,
    fontSize: 18,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  i: {
    borderColor: 'magenta',
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    marginTop: 5,
    fontSize: 18,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default Employees;