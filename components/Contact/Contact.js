import  React from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import { Formik } from 'formik';
import ContactStyles from '../Contact/ContactStyles'
import * as Yup from 'yup';

const Contact = () => {
    return ( 
        <View style={{backgroundColor:'#111', height:'100%'}}>
        <Text style={{color:'#fff',textAlign:'center', fontWeight:700, marginTop:20}}>Contact</Text>
               <Formik
                initialValues={{ name:'', email: '', message:'' }}
                validationSchema={Yup.object({
                name: Yup.string()
                  .required('name required'),
                  email: Yup.string()
                  .required('email required'),
                  message: Yup.string()
                  .required('message required'),
                })}
                onSubmit={values => console.log(values)}
              >
                {(props) => (
                  <View style={{padding:10}}>
                  <TextInput
                      onChangeText={props.handleChange('name')}
                      onBlur={props.handleBlur('name')}
                      value={props.values.name}
                      placeholder='Name'
                      style={ContactStyles.input}
                    />
                    {props.touched.name && props.errors.name ? (
                      <Text style={ContactStyles.err}>{props.errors.name}</Text>
                    ) : null}
                    <TextInput
                      onChangeText={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      value={props.values.email}
                      placeholder='Email'
                      style={ContactStyles.input}
                    />
                    {props.touched.email && props.errors.email ? (
                      <Text style={ContactStyles.err}>{props.errors.email}</Text>
                    ) : null}
                    <textarea
                      onChangeText={props.handleChange('message')}
                      onBlur={props.handleBlur('message')}
                      value={props.values.message}
                      placeholder='Message'
                      style={{padding:5,borderWidth:1,marginTop:10, marginBottom:10, borderColor:'#ddd', borderRadius:5,}}
                    />
                    {props.touched.message && props.errors.message ? (
                      <Text style={ContactStyles.err}>{props.errors.message}</Text>
                    ) : null}
                    <Button 
                    style={{marginBottom:10}}
                    onPress={props.handleSubmit} 
                    title="Submit" />
                  </View>
                )}
              </Formik>
        </View>
     );
}
 
export default Contact;