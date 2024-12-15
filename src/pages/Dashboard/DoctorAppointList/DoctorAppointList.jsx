import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAppointment from "../../../hooks/useAppointment";

const DoctorAppointList = ({ appointDoctor, index }) => {
    const { _id, image, doctorName, specialist } = appointDoctor;
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useAppointment();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/appointment/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }
    return (
        <tr className="w-full">
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="font-bold lg:text-xl md:text-base text-sm">
                {doctorName}
            </td>
            <td className="lg:text-base text-sm">
                {specialist}
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-lg text-red-600 text-2xl"><RiDeleteBin6Line /></button>
            </th>
        </tr>
    );
};

export default DoctorAppointList;