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
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/appointmentContact/${id}`)
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
    }

    return (
        <div className="max-w-full">
            <h2 className="text-3xl font-bold mb-4">Total Contact: {contacts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="max-w-full bg-green-400">
                        <tr className="lg:text-xl font-bold w-full">
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
                    <tbody>
                        {
                            contacts.map((contact, index) => <tr key={contact._id}>
                                <td>{index + 1}</td>
                                <td className="font-bold">{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td className="font-bold">{contact.doctorName}</td>
                                <td>{contact.department}</td>
                                <td>{contact.date}</td>
                                <td>
                                    <button onClick={() => deleteContact(contact._id)} className="btn bg-red-600 text-white text-xl btn-md font-bold hover:text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContact;