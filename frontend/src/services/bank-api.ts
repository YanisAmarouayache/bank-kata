import axios from "axios";
import { Statement } from "../components/History";

const API_URL = "http://localhost:5000/api/bank";

export const getBalance = async () => {
    try {
        const response = await axios.get(API_URL + '/balance');
        return response.data.balance;
    } catch (error: any) {
        console.error("Error fetching balance:", error);
        throw new Error(error.response?.data?.message || "Unexpected error");
    }
};

export const deposit = async (amount: number) => {
    try {
        const response = await axios.post(API_URL + '/deposit', { amount });
        return response.data;
    } catch (error: any) {
        console.error("Error making deposit:", error);
        throw new Error(error.response?.data?.message || "Unexpected error");
    }
};

export const withdraw = async (amount: number) => {
    try {
        const response = await axios.post(API_URL + '/withdraw', { amount });
        return response.data;
    } catch (error: any) {
        console.error("Error making withdrawal:", error);
        throw new Error(error.response?.data?.message || "Unexpected error");
    }
};

export const printStatements = async (): Promise<Statement[]> => {
    try {
        const response = await axios.get(API_URL + '/printstatements');
        return response.data;
    } catch (error: any) {
        console.error("Error fetching statements:", error);
        throw new Error(error.response?.data?.message || "Unexpected error");
    }
}
