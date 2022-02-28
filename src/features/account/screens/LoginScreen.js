import React, {useContext, useState} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {
  AccountBackground,
  AccountCover,
  Title,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorText,
  BackButton,
} from '../components/AccountStyles';
import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, error, isLoading} = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textcontentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textcontentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={p => setPassword(p)}
        />
        {error && <ErrorText>{error}</ErrorText>}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <BackButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </BackButton>
    </AccountBackground>
  );
};
