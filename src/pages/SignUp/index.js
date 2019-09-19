import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        icon="person-outline"
                        placeholder="Digite seu nome"
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                    />

                    <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho uma conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
