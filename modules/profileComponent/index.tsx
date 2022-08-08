import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { ProfileContainer } from './style'
import { ErrorToast, SucccessToast } from '../../shared/toaster/ToastMessages';
import { Card, Heading, Input, InputContainer, PrimaryButton, SubHeading } from '../../styles/style';
const ProfileComponent = () => {
    const [newUser, setNewUser] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [userDetails, setUserDetails] = useState<any>(null)
    const [bearerToken, setBearerToken] = useState<string>('')

    const baseURL = 'http://localhost:8000/'

    const router = useRouter()

    const resetValues = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const signUpHandler = async () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            ErrorToast("Please enter every field !")
        } else if (password !== confirmPassword) {
            ErrorToast("OOPS! Password Mismatch.")
        } else {
            await axios.post(baseURL + 'signup',
                {
                    firstName: firstName,
                    lastName: lastName,
                    emailOrPhone: email,
                    password: password,
                }
            ).then((res: any) => {
                console.log("res", res)
                if (res && res.data.success) {
                    SucccessToast(res.data.success)
                    setNewUser(true)
                    resetValues()
                } else {
                    ErrorToast(res.data.error)
                }
            })
        }
    }

    const loginHandler = async () => {
        try {

            if (!email || !password) {
                ErrorToast("Please enter every field !")
            } else {
                const response = await axios.post(baseURL + 'login',
                    {
                        emailOrPhone: email,
                        password: password,
                    }
                ).then(async (res: any) => {
                    console.log("res", res)
                    if (res && res.data.success) {
                        // await getUserDetails(res.data.bearer_Token)
                        setBearerToken(res.data.bearer_Token)
                        SucccessToast(res.data.success)

                    } else {
                        ErrorToast(res.data.error)
                    }
                })
                console.log("response", response)
            }

        } catch (error) {
            console.log("error from login", error)
        }
    }

    const getUserDetails = async (token: any) => {
        console.log("bearerToken", token)
        try {
            if (token) {
                await axios.get(baseURL + 'userDetails').then((res: any) => {
                    console.log("res for user", res.data,)
                    if (res.data.error) {
                        ErrorToast(res.data.error)
                    } else {
                        setUserDetails(res.data)
                        // router.push('/')
                    }
                })
            }
        } catch (error) {
            console.log("error userDetails", error)
        }
    }

    useEffect(() => {
        getUserDetails(bearerToken)
    }, [bearerToken])

    return (
        <ProfileContainer>
            <Heading> Be You - Event Planners </Heading>
            {userDetails ? <Card>
                <SubHeading> Hi {userDetails.firstName + " " + userDetails.lastName}. We glad to have you on our platform. </SubHeading>

                <SubHeading onClick={() => router.push('/')}> Click the below button to explore our application </SubHeading>

                <PrimaryButton onClick={loginHandler}>
                    Click Here
                </PrimaryButton>
            </Card> :
                newUser ? <Card>
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

                    <SubHeading cursor="pointer" onClick={() => setNewUser(false)}> Already have an account ?</SubHeading>
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
                        <SubHeading cursor="pointer" onClick={() => setNewUser(true)}> Sign up to explore ... !! </SubHeading>
                    </Card>
            }
        </ProfileContainer>
    )
}

export default ProfileComponent