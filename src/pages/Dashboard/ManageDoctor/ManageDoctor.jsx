import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../component/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useDoctors from "../../../hooks/useDoctors";

const ManageDoctor = () => {
    const axiosSecure = useAxiosSecure();

    const [doctors, refetch] = useDoctors();

    const handleDeleteDoctor = (doctor) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/doctors/${doctor._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${doctor.name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div>
            <h2 className="text-center font-bold text-2xl text-blue-500">All Doctors</h2>
            <SectionTitle
                heading="Manage all Doctors"
            ></SectionTitle>
            <div className="divider w-1/2 mx-auto"></div>
            <h2 className="text-3xl font-bold my-8">All Doctors: {doctors.length}</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        <thead className="bg-green-400">
                            <tr className="font-bold text-xl">
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {
                                doctors.map((doctor, index) => <tr key={doctor._id}>
                                    <td className="font-bold">
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={doctor.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold">
                                        {doctor.name}
                                    </td>
                                    <td>
                                        {doctor.email}
                                    </td>
                                    <td>{doctor.category}</td>
                                    <td>
                                        <Link to={`/dashboard/updateDoctor/${doctor._id}`}><button className="btn bg-green-400 text-white text-xl btn-md font-bold hover:text-green-500"><FaEdit></FaEdit></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteDoctor(doctor)} className="btn bg-red-600 text-white text-xl btn-md font-bold hover:text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctor;