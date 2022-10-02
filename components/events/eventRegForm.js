import React, { useState } from 'react';
import tw from "twin.macro";
import { useRouter } from "next/router";

const FormContainer = tw.div`w-full flex-1 mt-8 mx-auto max-w-xl`;
const RegisterButton = tw(PrimaryButtonBase)`w-full px-5 max-w-xl`;
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";

import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { firestore } from '../../services/firebase.js';

export function EventRegistrationForm(props) {

    var minSize = props.minSize;
    var maxSize = props.maxSize;
    var isSingleEntry = (minSize == maxSize);
    const [dataMap, setDataMap] = useState(new Map());
    const [eventregistered, setEventregistered] = useState(false);
    const [permissionChecked, setpermissionChecked] = useState(true);
    const router = useRouter();

    const createUI = (index) => {
        let isLeader = (index == 0) ? true : false;
        return (
            <>
                <p className="text-3xl text-white text-center p-5">
                    {isSingleEntry ? "Details" : (isLeader ? "Team Leader Details" : "Member " + (index + 1) + " Details")}
                </p>
                {
                    index >= minSize ?
                        <p className="text-xl text-secondary-200 text-center">
                            Optional
                        </p>
                        : null
                }
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2" htmlFor="grid-first-name">
                            Full Name
                        </label>
                        <input
                            className="placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder={isSingleEntry ? "Name" : (isLeader ? "Leader Name" : "Member " + (index + 1) + " Name")}
                            required={index < minSize ? true : false}
                            onChange={(e) => setDataMap(dataMap.set("member" + index.toString() + "Name", e.target.value))}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2" htmlFor="grid-password">
                            Phone Number
                        </label>
                        <input
                            className="placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-phone"
                            type="tel"
                            placeholder="+91 9988776655"
                            // pattern="+[0-9]{2} [0-9]{10}*[0-9]{12}"
                            required={index < minSize ? true : false}
                            onChange={(e) => setDataMap(dataMap.set("member" + index.toString() + "Phone", e.target.value))}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2" htmlFor="grid-last-name">
                            Email
                        </label>
                        <input
                            className="placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="email"
                            placeholder={isSingleEntry ? "example@email.com" : ("team" + (isLeader ? "leader@email.com" : "member" + (index + 1) + "@email.com"))}
                            required={index < minSize ? true : false}
                            onChange={(e) => setDataMap(dataMap.set("member" + index.toString() + "Email", e.target.value))}
                        />
                    </div>
                </div>
            </>
        );
    }

    const createRegistrationForm = () => {
        var teamForms = [];

        for (let i = 0; i < maxSize; i++)
            teamForms.push(createUI(i));

        return teamForms;
    }

    const handleCheckbox = (e) => {
        setDataMap(dataMap.set("permissionChecked", e.target.value))
        console.log(e.target.value)
        console.log(e.target.checked)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dataMap);

        try {

            const eventDocRef = doc(firestore, 'EventsReg', props.eventID);

            let data = {};
            dataMap.forEach((value, key) => data[key] = value)

            await updateDoc(eventDocRef, {
                registrations: arrayUnion(data),
            });

            setEventregistered(true);
        }
        catch (e) {
            // console.log(e);
            window.localStorage.setItem("eventError", true);
            router.push("/error");
        }
    }


    return (
        <>
            {!eventregistered ?
                <FormContainer>
                    <p className="text-4xl text-white text-center p-5">Registration Form</p>
                    {
                        minSize !== maxSize ?
                            <p className="text-xl text-blue-300 text-center pb-5">
                                Only team leader should register for the event.
                            </p>
                            : null
                    }
                    <p className="text-xl text-blue-200 text-center pb-5">
                        Once you get "Registration Successful" message, do not register again!.
                    </p>

                    <form validate onSubmit={handleSubmit}>

                        {
                            minSize !== maxSize ?
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2" htmlFor="grid-last-name">
                                            Team Name
                                        </label>
                                        <input
                                            className="placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Team Name"
                                            required
                                            onChange={(e) => setDataMap(dataMap.set("teamName", e.target.value))}
                                        />
                                    </div>
                                </div>
                                : null
                        }

                        {createRegistrationForm()}

                        <div className="flex justify-center pb-3">
                            <div>
                                <div className="form-check">
                                    <input className="h-4 w-4 border border-gray-300 rounded-sm mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                        value={permissionChecked}
                                        checked={permissionChecked}
                                        onClick={(e) => { setpermissionChecked(e.target.checked); setDataMap(dataMap.set("permissionChecked", e.target.checked)); }}
                                    />
                                    <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                        I would like to receive promotional and marketing emails from Technovnza
                                    </label>
                                    <p className="form-check-label text-center text-gray-600">
                                        By checking you are giving your consent to receive marketing and promotional content by Technovanza
                                    </p>
                                </div>
                            </div>
                        </div>

                        <RegisterButton type="submit">
                            {isSingleEntry ? "Register" : "Register Team"}
                        </RegisterButton>

                    </form>
                </FormContainer>
                :
                <>
                    <p className="text-4xl text-white text-center p-5">Registration Successful!</p>
                    <p className="text-3xl text-white text-center p-5">Do not register again! Your response has been recorded.</p>
                </>
            }

        </>
    );
}