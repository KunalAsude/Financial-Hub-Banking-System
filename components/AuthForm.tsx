'use client';
import Image
    from 'next/image'
import Link from 'next/link'
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';




const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter()
    const formSchema = authFormSchema(type);
    const [user, setUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        try {
            // Implement Appwrite logic as well as plaid
            if (type === 'sign-in') {
                // const response = await signIn({
                //     email:data.email,
                //     password: data.password
                // })

                // if(response) router.push('/')
            }

            if(type === 'sign-up') {
                // const newUser =await signUp(data)

                // setUser(newUser)
            }
            

            console.log(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            
        }finally {
            setIsLoading(false)
    }
}
    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-2'>
                <Link
                    href="/"
                    className="cursor-pointer flex items-center gap-2 mb-0 ">
                    <Image
                        src="/icons/logo2.svg"
                        alt="logo"
                        width={34}
                        height={34}
                    />
                    <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black">
                        Financial Hub
                    </h1>
                </Link>
                <div className='flex flex-col gap-1 md:gap-3 mt-0'>
                    <h1 className='text-24 lg:text-28 font-semibold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign In'
                                : 'Sign Up'

                        }
                        

                    </h1>
                </div>
            </header >
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* stripe Link */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                                        <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                                    </div>
                                    <div className='flex gap-4'>
                                    <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                                    <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                                    </div>
                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} name='state' label="State" placeholder='Example: MH' />
                                        <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 423601' />
                                    </div>
                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                                        <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                                    </div>
                                </>
                            )}

                            <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />

                            <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />

                            <div className="flex flex-col gap-4">
                                <Button type="submit" disabled={isLoading} className="form-btn">
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> &nbsp;
                                            Loading...
                                        </>
                                    ) : type === 'sign-in'
                                        ? 'Sign In' : 'Sign Up'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1'>
                        <p className='text-14 font-normal text-gray-600'>
                            {type === 'sign-in' ? 'Don’t have an account?' : 'Already have an account?'} &nbsp;
                            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link' >
                                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                            </Link>

                        </p>
                    </footer>
                </>
            )
            }
        </section>
    )
}

export default AuthForm