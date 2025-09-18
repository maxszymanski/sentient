'use client'
import Bg from '@/assets/form-box.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import Input from '../_ui/Input'
import Select from '../_ui/Select'

const contactSchema = z.object({
    job: z.string().optional(),

    email: z
        .string()
        .nonempty('Email is required')
        .email('Invalid email address'),
    use: z
        .string()
        .nonempty('This field is required')
        .min(3, 'Please enter more than 3 characters.'),
    system: z.string().nonempty('Please select operating system'),
})

type ContactType = z.infer<typeof contactSchema>

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<ContactType>({ resolver: zodResolver(contactSchema) })

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        alert('Success')

        reset()
    }

    const options = [
        { value: 'windows', label: 'Windows' },
        { value: 'macos', label: 'macOS' },
        { value: 'linux', label: 'Linux' },
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'iOS' },
        { value: 'other', label: 'Other' },
    ]

    return (
        <div className="mx-auto mt-[60px] w-full max-w-[520px] pl-2 sm:pl-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative flex h-[537px] w-full flex-col bg-cover bg-left bg-no-repeat px-4 py-7 pt-10 sm:bg-center sm:px-7"
                style={{ backgroundImage: `url(${Bg.src})` }}
            >
                <div className="flex w-full flex-col gap-5">
                    <Input
                        label="Email Address*"
                        name="email"
                        type="text"
                        formRegister={register('email')}
                        error={errors?.email || null}
                        message={errors?.email?.message || null}
                        disabled={isSubmitting}
                        valueFromWatch={watch('email')}
                        placeholder="Email address"
                    />
                    <Input
                        label="Job title"
                        name="name"
                        type="text"
                        formRegister={register('job')}
                        error={errors?.job || null}
                        message={errors?.job?.message || null}
                        disabled={isSubmitting}
                        valueFromWatch={watch('job')}
                        placeholder="Enter your job title..."
                    />
                    <Input
                        label="Primary use case interest*"
                        name="use"
                        type="text"
                        formRegister={register('use')}
                        error={errors?.use || null}
                        message={errors?.use?.message || null}
                        disabled={isSubmitting}
                        valueFromWatch={watch('use')}
                    />
                    <Select
                        label="Operating system*"
                        name="system"
                        formRegister={register('system')}
                        error={errors?.system || null}
                        message={errors?.system?.message || null}
                        disabled={isSubmitting}
                        valueFromWatch={watch('system')}
                        options={options}
                    />
                </div>
                <button
                    type="submit"
                    className="text-dark my-outline hover: hover:text-dark/90 mt-8 flex h-[43px] w-full shrink-0 cursor-pointer items-center justify-center self-center rounded-[59px] border-[0.5px] border-white/50 bg-white transition-colors duration-300 hover:bg-white/90"
                    disabled={isSubmitting}
                >
                    Secure your spot on waitlist
                </button>
            </form>
        </div>
    )
}

export default ContactForm
