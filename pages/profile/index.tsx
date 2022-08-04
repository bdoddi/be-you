import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ErrorToast, SucccessToast } from '../../shared/toaster/ToastMessages';

import { Card, Heading, Input, InputContainer, PrimaryButton, SubHeading } from '../../styles/style'
import { ProfileContainer } from './style'

const Profile = () => {
    const [newUser, setNewUser] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const router = useRouter()

    const resetValues = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const signUpHandler = () => {
        if(!firstName || !lastName || !email || !password || !confirmPassword) {
            ErrorToast("Please enter every field !")
        } else if(password !== confirmPassword) {
            ErrorToast("OOPS! Password Mismatch.")
        } else {
            SucccessToast("Congratulations! Your account is Ready...!! ")
            setNewUser(true)
            resetValues()
        }
    }

    const loginHandler = () => {
        if(!email || !password) {
            ErrorToast("Please enter every field !")
        } else {
            SucccessToast("Congratulations! Your've Logged In...!! ")
            router.push('/')
        }
    }

    return (
        <ProfileContainer>
            <Heading> Be You - Event Planners </Heading>
            {
                !newUser ? <Card>
                    <SubHeading> Create a new account to explore </SubHeading>
                    <InputContainer>
                        <Input placeholder='First Name' value={firstName}
                            onChange={(e: any) => setFirstName(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <Input placeholder='Last Name' value={lastName}
                            onChange={(e: any) => setLastName(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <Input placeholder='Email address or phone number' value={email}
                            onChange={(e: any) => setEmail(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <Input placeholder='Enter Password' value={password}
                            onChange={(e: any) => setPassword(e.target.value)} />
                    </InputContainer>
                    <InputContainer>
                        <Input placeholder='Confirm Password' value={confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)} />
                    </InputContainer>

                    <PrimaryButton onClick={signUpHandler}>
                        Signup
                    </PrimaryButton>

                    <SubHeading cursor="pointer"> Already have an account ?</SubHeading>
                </Card> :
                    <Card>
                        <SubHeading> Login to experience additional features ... !! </SubHeading>
                        <InputContainer>
                            <Input placeholder='Email address or phone number' value={email}
                                onChange={(e: any) => setEmail(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Input placeholder='Enter Password' value={password}
                                onChange={(e: any) => setPassword(e.target.value)} />
                        </InputContainer>

                        <PrimaryButton onClick={loginHandler}>
                            Login
                        </PrimaryButton>
                        <SubHeading cursor="pointer"> Sign up to explore ... !! </SubHeading>
                    </Card>
            }
        </ProfileContainer>
    )
}

export default Profile
