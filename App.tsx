/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 **/
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
function App(): JSX.Element {
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const [otpv1, setOptv1] = useState("");
  const [otpv2, setOptv2] = useState("");
  const [otpv3, setOptv3] = useState("");
  const [otpv4, setOptv4] = useState("");
  console.log("Otp value is ============" + JSON.stringify(otpv1));
  const orignalotp = 4040;
  const [otps, setOtps] = useState();
  const [resendclick, setResendClick] = useState(false);
  const [count, setCount] = useState(60);
  const handler = () => {
    setResendClick(true);
  }
  const verifyhandler = () => {
    setOtps(otpv1.toString() + otpv2.toString() + otpv3.toString() + otpv4.toString());
    if (orignalotp === otps) {
      Alert.alert("Your Otp is Correct")
    } else {
      Alert.alert("Your Otp is InCorrect")
    }
  }
  useEffect(() => {
    let intervals: any;
    if (resendclick) {
      intervals = setInterval(() => {
        if (count == 0) {
          clearInterval(intervals);
        } else {
          setCount(count - 1);
        }
      }, 1000)
    }
    return (() => {
      clearInterval(intervals);
    })
  }, [count, resendclick, otpv1, otpv2, otpv3, otpv4])
  return (
    <View style={[styles.sectionContainer]}>
      <View style={[styles.sectionundercontainer]}>
        <View>
          <View style={[styles.otpcontainer]}>
            <Text style={[styles.otptitile]}>
              Otp Verification
            </Text>
            <View style={[styles.textcontainer]}>
              <TextInput ref={otp1} keyboardType='numeric'
                maxLength={1} textAlign='center'
                value={otpv1}
                onChangeText={text => {
                  setOptv1(text)
                  if (text.length >= 1) {
                    console.log("Entered start 1 Textinput");
                    otp2.current.focus();
                  }
                  else if (text.length < 1) {
                    console.log("Entered end 1 Textinput");
                    otp1.current.focus();
                  }
                }}
                style={{ borderRadius: 10, width: 50, borderColor: otpv1.length >= 1 ? 'blue' : 'black', borderWidth: 1 }} />
              <TextInput ref={otp2} keyboardType='numeric' maxLength={1} textAlign='center'
                value={otpv2}
                onKeyPress={({ nativeEvent }) => console.log("Keypress nativeEvent.key" + nativeEvent.key)}
                onChangeText={text => {
                  console.log("Entered  Textinput");
                  setOptv2(text)
                  if (text.length >= 1) {
                    console.log("Entered start 2 Textinput");
                    otp3.current.focus();
                  }
                  else if (text.length < 1) {
                    console.log("Entered end 2 Textinput");
                    otp1.current.focus();
                  }
                }}
                style={{ borderRadius: 10, width: 50, borderColor: otpv2.length >= 1 ? 'blue' : 'black', borderWidth: 1 }} />
              <TextInput ref={otp3} keyboardType='numeric' maxLength={1} textAlign='center'
                value={otpv3}
                onChangeText={text => {
                  setOptv3(text)
                  if (text.length >= 1) {
                    console.log("Entered start 3 Textinput");
                    otp4.current.focus();
                  } else if (text.length < 1) {
                    console.log("Entered end 3 Textinput");
                    otp2.current.focus();
                  }
                }}
                style={{ borderRadius: 10, width: 50, borderColor: otpv3.length >= 1 ? 'blue' : 'black', borderWidth: 1 }} />
              <TextInput ref={otp4} keyboardType='numeric' maxLength={1} textAlign='center'
                value={otpv4}
                onChangeText={text => {
                  setOptv4(text)
                  if (text.length >= 1) {
                    console.log("Entered start 4 Textinput");
                    otp4.current.focus();
                  } else if (text.length < 1) {
                    console.log("Entered end 4 Textinput");
                    otp3.current.focus();
                  }
                }}
                style={{ borderRadius: 10, width: 50, borderColor: otpv4.length >= 1 ? 'blue' : 'black', borderWidth: 1 }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Pressable disabled={resendclick ? true : false}
                onPress={handler} style={{ marginTop: 20 }}>
                <Text style={{ color: resendclick && count != 0 ? 'black' : 'blue', fontSize: 15, fontWeight: '400' }}>
                  Resend
                </Text>
              </Pressable>
              {
                count != 0 && resendclick && (
                  <View style={{ marginTop: 20, alignSelf: 'center', marginHorizontal: 10 }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '400' }}>
                      {count} Seconds
                    </Text>
                  </View>
                )
              }
            </View>
            <View style={{ width: '70%', marginVertical: 20 }}>
              <TouchableOpacity
                disabled={otpv1 != "" && otpv2 != "" && otpv3 != "" && otpv4 != "" ? false : true}
                onPress={verifyhandler} style={{ backgroundColor: otpv1 !== '' && otpv2 !== '' && otpv3 !== '' && otpv4 !== '' ? 'blue' : 'grey', borderRadius: 20, padding: 5, width: '100%', borderColor: 'black', borderWidth: 1, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: '400', fontSize: 20 }}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionundercontainer: {
    height: '60%',
    width: '95%',
    justifyContent: 'center'
  },
  otpcontainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  otptitile: {
    marginBottom: 25,
    color: 'black',
    fontSize: 25,
    fontWeight: '400'
  },
  textcontainer: {
    flexDirection: 'row',
    gap: 20
  }
});

export default App;
