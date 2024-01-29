import { Link } from "react-router-dom";
export default function Footer(){
    const qatarAirways = ["About Us", "Awards" , "Careers" , "Press Releases" , "Sponsorship" , "Al Darb Qatarisation" , "Environmental" , "Sustainability"];
    const groupCompanies = ["Hamad International", "Airport" , "Qatar Executive" , "Qatar Duty Free" , "Qatar Airways Cargo" , "Internal Media Services" , "Design Organisation" , "Group Companies"];
    const businessSolution = ["Corporate Travel", "Beyond Business" , "QMICE Meetings And Events" , "Advertise With Us"];
    const businessPartners = ["Affiliate Marketing", "E-Procurement" , "Trade Partners"];
    const help = ["Contact Us", "Travel Alerts"];
    return(
        <div className="w-full h-[36rem] bg-white grid place-items-center">
            <div class="w-[72rem] h-[32rem]">
                <div className="grid grid-cols-6 text-[#4a525d]">
                    <div className="h-[30rem]">
                        <h2>Qatar Airways</h2><br/>
                            <ul>
                                {qatarAirways.map((item, index) => (
                                    <li key={index} className="underline my-1 font-semibold">{item}</li>
                                ))}
                            </ul>
                    </div>
                    <div>
                        <h2>Group Companies</h2><br/>
                        <ul>
                                {groupCompanies.map((item, index) => (
                                    <li key={index} className="underline my-1 font-semibold">{item}</li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Business Solution</h2>
                        <br/>
                        <ul>
                                {businessSolution.map((item, index) => (
                                    <li key={index} className="underline my-1 font-semibold">{item}</li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Business Partners</h2>
                        <br/>
                        <ul>
                                {businessPartners.map((item, index) => (
                                    <li key={index} className="underline my-1 font-semibold">{item}</li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Help</h2>
                        <br/>
                        <ul>
                            {help.map((item, index) => (
                                <li key={index} className="underline my-1 font-semibold">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                    <img src="../../assets/Theqa_logo_SVG.svg" alt="" />

                    <p>Lets Stay Connected</p>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    );
}