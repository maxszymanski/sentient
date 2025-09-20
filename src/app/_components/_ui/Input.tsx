'use client'
import { InputHTMLAttributes, useState } from 'react'
import { FieldError } from 'react-hook-form'
import InputBg from '@/assets/input-bg.png'

interface InputType
    extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    restClass?: string
    error?: FieldError | string | null
    message?: string | null
    formRegister?: object
    name: string
    label: string
    valueFromWatch?: string | undefined
}

function Input({
    name,
    label,
    error,
    message,
    formRegister,
    valueFromWatch = undefined,
    ...rest
}: InputType) {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)

    const shouldFloat = isFocused || hasValue || !!valueFromWatch

    return (
        <div className="flex w-full flex-col">
            <label htmlFor={name} className="mb-3.5 leading-5 text-white/50">
                {label}
            </label>

            <input
                name={name}
                id={name}
                type="text"
                {...formRegister}
                {...rest}
                className={`placeholder:text-white/24 input-shadow placeholder:text-sans relative inline-block h-[49px] w-full rounded-[10px] bg-left px-3.5 py-3 leading-5 text-white outline-none placeholder:leading-5 focus-visible:outline-none sm:bg-cover sm:bg-center ${
                    error ? 'bg-red-300/20' : 'bg-dark'
                } ${shouldFloat ? 'border-white/12 border sm:border-0' : 'border-white/12 border'} `}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false)
                    setHasValue(!!e.target.value)
                }}
                style={
                    shouldFloat
                        ? { backgroundImage: `url(${InputBg.src})` }
                        : {}
                }
            />

            {error && message && (
                <span
                    className={`ml-0.5 mt-2 inline-block self-start text-sm tracking-[0.2px] text-red-300 lg:mt-1.5`}
                >
                    {message}
                </span>
            )}
        </div>
    )
}

export default Input
