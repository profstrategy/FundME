import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../skeleton/Spinner';

const UserDetails = () => {
    const { profile } = useSelector(store => store.data) || {};
    if (!profile) return <Spinner />

    const {
        surname,
        last_name,
        address = {},
        amount,
        phone_number,
        job,
        email,
        gender,
    } = profile;

    const { city, street, number } = address;

    return (

        <div className="relative overflow-x-auto mb-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 auto">
                <tbody>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Surname
                        </th>
                        <td className="px-6 py-4">
                            {surname}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lastname
                        </th>
                        <td className="px-6 py-4">
                            {last_name}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Wallet amount
                        </th>
                        <td className="px-6 py-4">
                            {amount}
                        </td>
                    </tr>


                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Job
                        </th>
                        <td className="px-6 py-4">
                            {job}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Email
                        </th>
                        <td className="px-6 py-4">
                            {email}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            PhoneNumber
                        </th>
                        <td className="px-6 py-4">
                            {phone_number}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Address
                        </th>
                        <td className="px-6 py-4">
                            {`${city}, ${street} street, No, ${number}`}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Gender
                        </th>
                        <td className="px-6 py-4">
                            {gender}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserDetails;

