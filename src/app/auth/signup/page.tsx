"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Form, Input, InputGroup } from 'rsuite'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from '../../../../firebaseConfig'

const styles = {
    width: '100%',
    marginBottom: 16
}

const SignUpPage = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function createUser(name: string, email: string, password: string) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            await sendEmailVerification(user);
            console.log("Email verification sent to:", user.email);
            // You can now update the user's profile with the name
            await updateProfile(user, { displayName: name });

            console.log("User created successfully:", user);
            return user; // Return the created user object
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    const handleSubmit = () => {
        if (password === confirmPassword) {
            createUser(userName, email, password).then((res) => {
                console.log(res)
            }).catch(e => console.log(e))
        }
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-slate-100'>
            <div className='sm:max-w-[450px] w-full h-screen sm:h-fit min-h-[300px] rounded-xl shadow-xl bg-white text-gray-700 text-center pt-32 sm:p-10 p-10 items-center flex flex-col' >
                <div className='w-full text-right'>
                    <Link href='/auth/login' className='hover:text-black' >Login existing Account</Link>
                </div>
                <div className='w-full' >
                    <Image width={50} height={50} src="https://img.icons8.com/374151/ios-filled/50/canva-app.png" alt="canva-app" />
                </div>
                <div className='w-full text-left mt-2 font-extrabold text-2xl' >Welcome !</div>
                <div className='w-full text-left mb-8 tracking-widest' >Enter your details to get started.</div>
                <Form className='w-full'>
                    <InputGroup size='lg' inside style={styles}>
                        <InputGroup.Addon>
                            <Image width="20" height="20" src="https://img.icons8.com/717883/parakeet-line/50/badge" alt="badge" />
                        </InputGroup.Addon>
                        <Input placeholder='Name' onChange={(value) => { setUserName(value) }} />
                    </InputGroup>
                    <InputGroup size='lg' inside style={styles}>
                        <InputGroup.Addon>
                            <Image width="20" height="20" src="https://img.icons8.com/717883/parakeet-line/48/new-post.png" alt="new-post" />
                        </InputGroup.Addon>
                        <Input placeholder='Email' onChange={(value) => { setEmail(value) }} />
                    </InputGroup>
                    <InputGroup size='lg' inside style={styles}>
                        <InputGroup.Addon>
                            <Image width="20" height="20" src="https://img.icons8.com/717883/ios/48/key.png" alt="key" />
                        </InputGroup.Addon>
                        <Input type='password' placeholder='Password' onChange={(value) => { setPassword(value) }} />
                    </InputGroup>
                    <InputGroup size='lg' inside style={styles}>
                        <InputGroup.Addon>
                            <Image width="20" height="20" src="https://img.icons8.com/717883/ios/48/key.png" alt="key" />
                        </InputGroup.Addon>
                        <Input type='password' placeholder='Confirm Password' onChange={(value) => { setConfirmPassword(value) }} />
                    </InputGroup>
                    <Button appearance='primary' style={styles} size='lg' onClick={handleSubmit} >Sign Up</Button>
                </Form>
                <div className='w-full border-t pt-2 border-slate-200 mb-4 text-sm text-slate-400'>or continue with</div>
                <Button appearance='ghost' size='lg' style={styles} startIcon={<Image width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />} >Google</Button>
            </div>
        </div>
    )
}

export default SignUpPage