import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

  interface Props {
    selectedEmp: object,
    setShow: React.Dispatch<React.SetStateAction<string>>
    }
  
const Works: React.FC<Props> = ({selectedEmp}) => {

const [show, setShow] = useState('list')
const [selectedWork, setSelectedWork] = useState<object | null | undefined>({})

let wAssignments = [{id: 1, Title: "Aidan korjaaminen", Customer: "As Oy Linnala", Deadline: "08.10"},
{id: 2, Title: "Pihan hiekoitus", Customer: "Keskuskoulu", Deadline: "01.10"},
{id: 3, Title: "Saranoiden voitelu", Customer: "Attendo", Deadline: "28.09"}]


if (show == 'list') {
  
  return (
    <View style={styles.container}>
      <Button title={"Lisää uusi"} onPress={() => setShow('addForm')} />
      <Text style={styles.header}>Suorittamattomat työt</Text>
      {wAssignments.map(w => ( <Text style={styles.p} key={w.id}>{w.Deadline + " - " + w.Title + " - " + w.Customer}</Text>))}
      <StatusBar style="auto" />
    </View>
  );
}
else {
  return( <View style={styles.container}>
      <Button title={"List all works"} onPress={() => setShow('list')} />
    <Text style={styles.header}>Uuden työtehtävän luominen</Text>
    <TextInput style={styles.i} placeholder="Otsikko" />
    <TextInput style={styles.i} placeholder="Asiakas" />
    <TextInput style={styles.i} placeholder="aikaraja"/>
    <Button title={"Ok"} onPress={() => setShow('list')} />
    <StatusBar style="auto" />
  </View>)
}
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
    borderRadius: 20,
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

export default Works;