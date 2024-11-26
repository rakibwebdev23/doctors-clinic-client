import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    });

    return (
        <div>
            <h2 className="my-4 text-4xl font-bold">Total Payment: {payments.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="lg:text-xl bg-green-400">
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Visiting Fee</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.transactionId}</td>
                                    <td className="text-center">$ {payment.visitFee}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;