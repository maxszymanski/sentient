'use client'
import { SelectHTMLAttributes, useState } from 'react'
import { FieldError } from 'react-hook-form'
import InputBg from '@/assets/input-bg.png'
import { GoChevronDown } from 'react-icons/go'

interface SelectType extends SelectHTMLAttributes<HTMLSelectElement> {
    restClass?: string
    error?: FieldError | string | null
    message?: string | null
    formRegister?: object
    name: string
    label: string
    valueFromWatch?: string | undefined
    options: { value: string; label: string }[]
}

function Select({
    name,
    label,
    error,
    message,
    formRegister,
    valueFromWatch = undefined,
    options,
    ...rest
}: SelectType) {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)

    const shouldFloat = isFocused || hasValue || !!valueFromWatch

    return (
        <div className="flex w-full flex-col">
            <label htmlFor={name} className="mb-3.5 leading-5 text-white/50">
                {label}
            </label>
            <div className="relative w-full">
                <select
                    name={name}
                    id={name}
                    {...formRegister}
                    {...rest}
                    className={`input-shadow input-border relative inline-block h-[49px] w-full cursor-pointer appearance-none rounded-[10px] bg-cover bg-center px-3.5 py-3 leading-5 outline-none focus-visible:outline-none ${error ? 'bg-red-300/20' : 'bg-dark'} ${shouldFloat ? '' : 'border-white/12 border'} ${valueFromWatch != '' ? 'text-white' : 'text-white/24'} `}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => {
                        setIsFocused(false)
                        setHasValue(!!e.target.value)
                    }}
                    defaultValue=""
                    style={
                        shouldFloat
                            ? { backgroundImage: `url(${InputBg.src})` }
                            : {}
                    }
                >
                    <option value="" hidden>
                        Select your operating system
                    </option>
                    {options.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-dark text-white"
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>
                <GoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
            </div>

            {error && message && (
                <span className="ml-0.5 mt-2 inline-block w-full self-start text-sm tracking-[0.2px] text-red-300 lg:mt-1.5">
                    {message}
                </span>
            )}
        </div>
    )
}

export default Select
