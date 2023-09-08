import React, {useEffect} from 'react';
import {useDataContext, UserModel} from "@/context/user";
import Link from "next/link";
import CardHeader from "@/components/shared/card-header";
import {useRouter} from "next/router";

const AccountManagement = () => {
    const {users, currentUser, removeCurrentUser,removeUser} = useDataContext();
    const router = useRouter()

    useEffect(() => {
        if (!currentUser?.email) {
            router.push('/')
        }
    })
    const logout = () => {
        removeCurrentUser()
        router.push('/')
    }
    return (
        <main className="max-w-sm	 mx-auto mt-8 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
            <CardHeader title={'Accounts'} iconClass={'fa-user-circle'}
                        subTitle={`If you have more than one account, you can add them and easily switch between.`}/>

            <ul className="border rounded-lg">
                {users.map((user: UserModel, index: number) => (
                    <li key={index} className="">
                        <div className="flex flex-row justify-between items-center border-b p-2">
                            <div className="flex space-x-4">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold">{user.email}</p>
                                    <p className="font-semibold">{user.dob}</p>
                                </div>

                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <i className="fa fa-check-circle-o text-[#228EEE]"></i>
                                {currentUser?.email !==user.email && (
                                    <button onClick={()=>removeUser(index)} type="button"><i className="fa fa-minus text-red-500"></i></button>)}
                            </div>
                        </div>
                    </li>
                ))}
                {users && users.length < 5 && (
                    <li className="p-2 ">
                        <div className="flex flex-row items-center text-zinc-400 gap-2">
                            <i className="fa fa-plus-circle"></i>
                            <Link className="text-gray-400" href='/signup'>Add an Existing Account</Link>
                        </div>

                    </li>
                )}
            </ul>

            <div className="mb-4">
                <span className="text-zinc-400">You can add up to 5 accounts.</span> <Link href="#">Learn more</Link>
            </div>

            <button type='button' onClick={() => logout()}
                    className="p-2 rounded-lg border flex flex-row items-center text-zinc-400 gap-2">
                <i className="fa fa-power-off"></i> <span>Log Out @{currentUser?.email}</span>
            </button>
        </main>

    );
};

export default AccountManagement;
