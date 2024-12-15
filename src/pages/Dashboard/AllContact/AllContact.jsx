import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllContact = () => {
    const axiosSecure = useAxiosSecure();

    const { data: contacts = [], refetch } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await axiosSecure.get("/appointmentContact");
            return res.data;
        }
    });

    const deleteContact = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/appointmentContact/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "This contact has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    };

    return (
        <div className="p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Total Contact: {contacts.length}
            </h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table table-zebra w-full">
                    {/* Table Header */}
                    <thead className="bg-green-400 text-white">
                        <tr className="text-sm lg:text-base font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Doctor Name</th>
                            <th>Department</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={contact._id} className="hover:bg-gray-100 text-xs md:text-sm lg:text-base">
                                <td>{index + 1}</td>
                                <td className="font-semibold text-sm">{contact.name}</td>
                                <td className="text-sm">{contact.email}</td>
                                <td className="text-sm">{contact.phone}</td>
                                <td className="font-semibold text-sm">{contact.doctorName}</td>
                                <td className=" text-sm">{contact.department}</td>
                                <td className="text-sm">{contact.date}</td>
                                <td>
                                    <button
                                        onClick={() => deleteContact(contact._id)}
                                        className="btn bg-red-600 text-white hover:text-red-600 text-xs md:text-sm lg:text-lg"
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

export default AllContact;
