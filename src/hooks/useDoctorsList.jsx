import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

export const useDoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    axiosSecure("/doctors")
        .then(res => {
            setLoading(false);
            setDoctors(res.data);
        });

    const doctorsCardiologist = doctors.filter(doctor => doctor.category === "Cardiologist");
    const doctorsDermatologist = doctors.filter(doctor => doctor.category === "Dermatologist");
    const doctorsOrthopedic = doctors.filter(doctor => doctor.category === "Orthopedic Surgeon");
    const doctorsNeurologist = doctors.filter(doctor => doctor.category === "Neurologist");
    const doctorsEndocrinologist = doctors.filter(doctor => doctor.category === "Endocrinologist");
    const doctorsGynecologist = doctors.filter(doctor => doctor.category === "Gynecologist");
    const doctorsSpecial = doctors.filter(doctor => doctor.category === "Special");

    return [doctors, doctorsSpecial, doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist, loading];
};