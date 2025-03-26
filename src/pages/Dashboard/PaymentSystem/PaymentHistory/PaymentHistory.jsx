import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        },
    });

    return (
        <div>
            <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-black">
                Total Payment: {payments.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra rounded-lg max-w-full">
                    <thead className="bg-green-400 text-white text-sm md:text-lg font-bold">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th className="text-center">Visiting Fee</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id} className="bg-white text-slate-700">
                                <td>{index + 1}</td>
                                <td className="break-words">{payment.email}</td>
                                <td className="break-words">{payment.transactionId}</td>
                                <td className="text-center">$ {payment.visitFee}</td>
                                <td className="text-red-600">{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
