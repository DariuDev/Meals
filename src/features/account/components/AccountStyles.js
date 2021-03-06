import styled from 'styled-components/native';
import {View} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../assets/home_bg.jpg'),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;
export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const AccountCover = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountContainer = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 10%;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const AuthButton = styled(Button).attrs({
  color: 'blue',
})`
  margin: 1%;
  width: 200px;
  padding: 5px;
`;
export const BackButton = styled(Button).attrs({
  color: 'blue',
})`
  margin: 1%;
  width: 100px;
  padding: 5px;
  margin-top: 10px;
`;
export const AuthInput = styled(TextInput)`
  height: 60px;
  width: 250px;
  margin: 1%;
`;
export const ErrorText = styled(Text)`
  margin: 1%;
  color: red;
`;
export const LottieWrapper = styled(View)`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: 10%;
`;
