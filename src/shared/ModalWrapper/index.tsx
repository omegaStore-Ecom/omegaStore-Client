import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { ModalProps } from '../../../interfaces';



const ModalWrapper: React.FC<ModalProps> = ({ isOpen, setIsOpen , component , title}) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-50" onClose={() => setIsOpen(false)}>
                <div className="min-h-screen px-4 text-center ">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-[72em] max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-md bg-white ">
                            <Dialog.Title as="h2" className="text-2xl font-semibold leading-10 text-gray-900 mb-5">
                                {title}
                            </Dialog.Title>
                             <div className="rounded-lg p-8 lg:col-span-3 bg-gray-50">
                            {component}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalWrapper;