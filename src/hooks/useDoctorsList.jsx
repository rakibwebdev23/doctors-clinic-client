import { useEffect, useState } from "react";

export const useDoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("../../public/doctorsList.json")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setDoctors(data)
            })
    }, []);

    const doctorsCardiologist = doctors.filter(doctor => doctor.category === "Cardiologist");
    const doctorsDermatologist = doctors.filter(doctor => doctor.category === "Dermatologist");
    const doctorsOrthopedic = doctors.filter(doctor => doctor.category === "Orthopedic Surgeon");
    const doctorsNeurologist = doctors.filter(doctor => doctor.category === "Neurologist");
    const doctorsEndocrinologist = doctors.filter(doctor => doctor.category === "Endocrinologist");
    const doctorsGynecologist = doctors.filter(doctor => doctor.category === "Gynecologist");
    const doctorsSpecial = doctors.filter(doctor => doctor.category === "Special");

    return [doctors,doctorsSpecial,doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist,  loading];
};