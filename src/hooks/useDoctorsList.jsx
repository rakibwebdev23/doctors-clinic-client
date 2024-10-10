// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useDoctorsList = () => {
    const axiosPublic = useAxiosPublic();
    // const [doctors, setDoctors] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/doctors')
    //         .then(res => res.json())
    //         .then(data => {
    //             setLoading(false);
    //             setDoctors(data);
    //         })
    // }, [])

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await axiosPublic.get("/doctors");
            return res.data;
        }
        
    });

    const doctorsCardiologist = doctors.filter(doctor => doctor.category === "Cardiologist");
    const doctorsDermatologist = doctors.filter(doctor => doctor.category === "Dermatologist");
    const doctorsOrthopedic = doctors.filter(doctor => doctor.category === "Orthopedic Surgeon");
    const doctorsNeurologist = doctors.filter(doctor => doctor.category === "Neurologist");
    const doctorsEndocrinologist = doctors.filter(doctor => doctor.category === "Endocrinologist");
    const doctorsGynecologist = doctors.filter(doctor => doctor.category === "Gynecologist");
    const doctorsSpecial = doctors.filter(doctor => doctor.category === "Special");

    return [doctors, refetch, doctorsSpecial, doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist];
};