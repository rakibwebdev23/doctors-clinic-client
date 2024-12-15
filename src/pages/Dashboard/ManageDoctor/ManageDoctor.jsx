import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../component/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
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
                axiosSecure.delete(`/doctors/${doctor._id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${doctor.name} has been deleted.`,
                            icon: "success"
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="p-2 md:p-6">
            <SectionTitle heading="Manage All Doctors"></SectionTitle>
            <h2 className="text-2xl md:text-3xl font-bold my-4 text-center text-black">
                All Doctors: {doctors.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-auto w-full">
                    <thead className="bg-green-400">
                        <tr className="text-sm lg:text-lg md:text-base font-semibold text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr
                                key={doctor._id}
                                className="text-xs md:text-base hover:bg-gray-100 text-black"
                            >
                                <td className="font-bold">{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                                                <img
                                                    src={doctor.image}
                                                    alt="Doctor Avatar"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold lg:text-base text-sm">{doctor.name}</td>
                                <td className="text-gray-600 lg:text-base text-sm">{doctor.email}</td>
                                <td className="text-gray-600 lg:text-base text-sm">
                                    {doctor.category}
                                </td>
                                <td>
                                    <Link
                                        to={`/dashboard/updateDoctor/${doctor._id}`}
                                    >
                                        <button className="btn btn-sm md:btn-md bg-green-400 text-white hover:bg-green-500">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteDoctor(doctor)
                                        }
                                        className="btn btn-sm md:btn-md bg-red-600 text-white hover:bg-red-500"
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;
