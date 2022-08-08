import {
    faBox,
    faClockRotateLeft,
    faHandHoldingDollar,
    faPeopleArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Zoom, Slide, Flip } from "react-reveal";
import "./Benefits.css"
const Benefits = () => {
    return (
        <div className="bg-white w-full block lg:flex justify-center items-center py-14 mb-10">
            <Zoom>
                <div className="lg:w-[80ch] px-4">
                    <Slide right>
                        <h2 className="font-[Nunito] text-4xl font-extrabold my-5 text-blue-900">
                            Customer <span className="text-cyan-800">Benefits</span>
                        </h2>
                        <p className="my-5">
                            Our objective is to Reduce our clients overall Logistics Cost and
                            Increase their Customer Order Servicability <br />
                            <br />
                        </p>
                    </Slide>

                    <Flip right>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="strength-option shadow hover:shadow-lg transition-all duration-300 py-4 mx-2">
                                <p className="strength-icon">
                                    <FontAwesomeIcon icon={faBox} />
                                </p>
                                <h3 className="font-bold text-md my-2 uppercase text-cyan-800">
                                    Parts Inventory
                                </h3>
                                <p className="text-xs leading-4">
                                    Manage your stocktake with ease. Keep track of all your parts as
                                    you buy and sell..
                                </p>
                            </div>

                            <div className="strength-option shadow hover:shadow-lg transition-all duration-300 py-4 mx-2">
                                <p className="strength-icon">
                                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                                </p>
                                <h3 className="font-bold text-md my-2 uppercase text-cyan-800">
                                    Flexible Pricing Levels
                                </h3>
                                <p className="text-xs leading-4">
                                    Easily customise your invoice according to your customers
                                    pricing levels.
                                </p>
                            </div>

                            <div className="strength-option shadow hover:shadow-lg transition-all duration-300 py-4 mx-2">
                                <p className="strength-icon">
                                    <FontAwesomeIcon icon={faPeopleArrowsLeftRight} />
                                </p>
                                <h3 className="font-bold text-md my-2 uppercase text-cyan-800">Support Team</h3>
                                <p className="text-xs leading-4">
                                    Workshop Mate is supported, owned and operated in Australia.
                                    Call or email us when you need support
                                </p>
                            </div>

                            <div className="strength-option shadow hover:shadow-lg transition-all duration-300 py-4 mx-2">
                                <p className="strength-icon">
                                    <FontAwesomeIcon icon={faClockRotateLeft} />
                                </p>
                                <h3 className="font-bold text-md my-2 uppercase text-cyan-800">
                                    Service History
                                </h3>
                                <p className="text-xs leading-4">
                                    Just at a simple click Service History lets you know the
                                    customer name and vehicle history
                                </p>
                            </div>
                        </div>
                    </Flip>
                </div>
            </Zoom>
        </div>
    );
};

export default Benefits;